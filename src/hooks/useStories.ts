import { useEffect, useState } from "react";
import { type DrArticle, useArticleByUrn } from "./useArticleByUrn";

export type CoverCard = {
  type: "cover";
  title: string;
  subtitle: string;
  image?: string;
  date: string;
  breaking: boolean;
  wordCount: number;
};

export type HeadingCard = {
  type: "heading";
  text: string;
};

export type BodyTextCard = {
  type: "body-text";
  text: string;
};

export type QuoteCard = {
  type: "quote";
  body: string;
  citation?: string | null;
};

export type BylineCard = {
  type: "byline";
  contributors: { role?: string | null; title?: string | null }[];
};

export type StoryCardData =
  | CoverCard
  | HeadingCard
  | BodyTextCard
  | QuoteCard
  | BylineCard;

export type StoryItem = DrArticle & {
  guid: string;
  cards: StoryCardData[];
};

type StoriesState = { items: StoryItem[] };

const DUMMY_ARTICLE_URN = "f68f2a49-8e9d-4e0f-a8be-446024509a37";

/**
 * The API returns body as array of inline nodes: [{ type: "Text", text: "..." }]
 * This extracts all text content joined into a single string.
 */
function extractBodyText(body: unknown): string | null {
  if (typeof body === "string") return body.trim() || null;

  if (Array.isArray(body)) {
    const text = body
      .map((node) => {
        if (typeof node === "object" && node !== null && "text" in node) {
          return (node as { text: string }).text ?? "";
        }
        return "";
      })
      .join("")
      .trim();
    return text || null;
  }

  return null;
}

const MAX_CHARS_PER_CARD = 400;

function buildCards(article: DrArticle): StoryCardData[] {
  const cover: CoverCard = {
    type: "cover",
    title: article.title,
    subtitle: article.summary,
    image:
      article.teaserImage?.mobile?.url ??
      article.teaserImage?.default?.url ??
      undefined,
    date: article.startDate,
    breaking: article.breaking,
    wordCount: article.wordCount,
  };

  const result: StoryCardData[] = [cover];

  // Buffer accumulates consecutive paragraphs
  let buffer: string[] = [];

  function flushBuffer() {
    if (buffer.length === 0) return;
    const text = buffer.join("\n\n").trim();
    if (!text) {
      buffer = [];
      return;
    }

    // If the flushed text is still too long, split on MAX_CHARS_PER_CARD boundaries
    // but try to break at sentence ends (". ") rather than mid-word
    let remaining = text;
    while (remaining.length > MAX_CHARS_PER_CARD) {
      let splitAt = remaining.lastIndexOf(". ", MAX_CHARS_PER_CARD);
      if (splitAt === -1 || splitAt < MAX_CHARS_PER_CARD * 0.5) {
        splitAt = MAX_CHARS_PER_CARD;
      } else {
        splitAt += 1; // include the period
      }
      result.push({
        type: "body-text",
        text: remaining.slice(0, splitAt).trim(),
      });
      remaining = remaining.slice(splitAt).trim();
    }
    if (remaining) result.push({ type: "body-text", text: remaining });

    buffer = [];
  }

  for (const block of article.body) {
    switch (block.__typename) {
      case "ParagraphComponent": {
        const text = extractBodyText(block.body);
        if (!text) break;

        // If adding this paragraph would exceed the limit, flush first
        const projected =
          buffer.length > 0 ? buffer.join("\n\n") + "\n\n" + text : text;

        if (projected.length > MAX_CHARS_PER_CARD && buffer.length > 0) {
          flushBuffer();
        }

        buffer.push(text);
        break;
      }

      case "HeadingComponent": {
        // Headings always break: flush pending paragraphs first
        flushBuffer();
        const text = block.text?.trim();
        if (text) result.push({ type: "heading", text });
        break;
      }

      case "QuoteComponent": {
        flushBuffer();
        const text = extractBodyText(block.body);
        if (text)
          result.push({
            type: "quote",
            body: text,
            citation: block.citation ?? null,
          });
        break;
      }

      case "ImageComponent":
        // Images break flow but we don't render them — just flush
        flushBuffer();
        break;

      default:
        break;
    }
  }

  // Flush any remaining paragraphs
  flushBuffer();

  if (article.contributions.length > 0) {
    result.push({
      type: "byline",
      contributors: article.contributions.map((c) => ({
        role: c.role,
        title: c.title,
      })),
    });
  }

  return result;
}

export function useStories() {
  const [data, setData] = useState<StoriesState | null>(null);
  const {
    data: articleData,
    loading,
    error,
    refetch,
  } = useArticleByUrn(DUMMY_ARTICLE_URN);

  useEffect(() => {
    if (!articleData) return;
    const cards = buildCards(articleData);
    const items: StoryItem[] = Array.from({ length: 10 }).map((_, i) => ({
      ...articleData,
      guid: `story-${i}-${articleData.urlPathId}`,
      cards,
    }));
    setData({ items });
  }, [articleData]);

  return { data, loading, error, refetch };
}
