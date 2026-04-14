import {
  useArticleQuery,
  type ArticleQuery,
} from "../graphql/generated/graphql";

export type DrArticle = NonNullable<ArticleQuery["article"]>;
export type DrArticleContribution = NonNullable<
  NonNullable<DrArticle["contributions"]>[number]
>;
export type DrArticleBodyBlock = DrArticle["body"][number];
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

type UseArticleByUrnResult = {
  data: DrArticle | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
};

export function useArticleByUrn(
  urn: string | undefined | null,
): UseArticleByUrnResult {
  const normalizedUrn = normalizeDrArticleUrn(urn ?? null);
  const { data, loading, error, refetch } = useArticleQuery({
    variables: { urn: normalizedUrn ?? "" },
    skip: !normalizedUrn,
  });

  return {
    data: data?.article ?? null,
    loading,
    error: error ? new Error(error.message) : null,
    refetch: async () => {
      await refetch();
    },
  };
}
