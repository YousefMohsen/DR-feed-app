import { useCallback, useEffect, useState } from "react";

/**
 * DR GraphQL (same endpoint as dr.dk article pages).
 * Set `EXPO_PUBLIC_DR_STEFFI_GRAPHQL_URL` in `.env` (see `.env.example`).
 */
export const DR_STEFFI_GRAPHQL_URL =
  process.env.EXPO_PUBLIC_DR_STEFFI_GRAPHQL_URL;

const ARTICLE_QUERY = `
query Article($urn: String!) {
  article(urn: $urn) {
    title
    summary
    text
    startDate
    wordCount
    breaking
    urlPathId
    teaserImage {
      default { url }
      mobile { url }
    }
    contributions {
      role
      bylinePrefix
      prefix
      title
      titleSuffix
      agent { __typename }
    }
    body {
      __typename
      ... on ParagraphComponent { body }
      ... on HeadingComponent { text }
      ... on QuoteComponent { body citation }
    }
  }
}
`;

export type DrArticleContribution = {
  role?: string | null;
  bylinePrefix?: string | null;
  prefix?: string | null;
  title?: string | null;
  titleSuffix?: string | null;
  agent?: { __typename?: string } | null;
};

/** Rich body blocks; shape varies by __typename (ParagraphComponent, ListComponent, etc.). */
export type DrArticleBodyBlock = {
  __typename: string;
  body?: unknown; //todo type this
  text?: string;
  citation?: string | null;
};

export type DrArticle = {
  title: string;
  summary: string;
  text: string;
  startDate: string;
  wordCount: number;
  breaking: boolean;
  urlPathId: string;
  teaserImage: {
    default: { url?: string | null } | null;
    mobile: { url?: string | null } | null;
  } | null;
  contributions: DrArticleContribution[];
  body: DrArticleBodyBlock[];
};

/**
 * RSS `<guid>` values look like `urn:dr:umbraco:article:<uuid>`
 * Removes urn:dr:umbraco:article: prefix if present.
 */
export function normalizeDrArticleUrn(
  raw: string | undefined | null,
): string | null {
  if (raw == null || raw === "") return null;
  const trimmed = raw.trim();
  if (trimmed.startsWith("urn:dr:umbraco:article:")) return trimmed;
  if (
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      trimmed,
    )
  ) {
    return `urn:dr:umbraco:article:${trimmed}`;
  }
  return trimmed;
}

export function drArticleCanonicalUrl(urlPathId: string): string {
  if (!urlPathId) return "https://www.dr.dk";
  return urlPathId.startsWith("http")
    ? urlPathId
    : `https://www.dr.dk${urlPathId.startsWith("/") ? "" : "/"}${urlPathId}`;
}

type GraphQLArticleResponse = {
  data?: { article: DrArticle | null };
  errors?: { message?: string }[];
};

type UseArticleByUrnResult = {
  data: DrArticle | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
};

export function useArticleByUrn(
  urn: string | undefined | null,
): UseArticleByUrnResult {
  const [data, setData] = useState<DrArticle | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const normalizedUrn = normalizeDrArticleUrn(urn ?? null);

  const fetchArticle = useCallback(async () => {
    if (!normalizedUrn || !DR_STEFFI_GRAPHQL_URL) {
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(DR_STEFFI_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: ARTICLE_QUERY,
          variables: { urn: normalizedUrn },
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const json = (await res.json()) as GraphQLArticleResponse;

      if (json.errors?.length) {
        throw new Error(json.errors[0]?.message ?? "GraphQL error");
      }

      const article = json.data?.article;
      if (!article) {
        throw new Error("Article not found");
      }

      setData(article);
    } catch (err) {
      setError(err as Error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [normalizedUrn]);

  useEffect(() => {
    void fetchArticle();
  }, [fetchArticle]);

  return {
    data,
    loading,
    error,
    refetch: fetchArticle,
  };
}
