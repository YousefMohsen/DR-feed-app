import { XMLParser } from "fast-xml-parser";
import { useCallback, useEffect, useState } from "react";

type FeedItem = {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  imageUrl?: string;
};

type FeedData = {
  title: string;
  description: string;
  link: string;
  lastBuildDate: string;
  language: string;
  items: FeedItem[];
};

type UseFetchFeedResult = {
  data: FeedData | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
};

/**
 * Fetches an RSS feed and returns the data.
 * @param url - The URL of the RSS feed to fetch.
 */
export function useFetchFeed(url: string): UseFetchFeedResult {
  const [data, setData] = useState<FeedData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchFeed = useCallback(async () => {
    if (!url) return;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const xmlText = await res.text();

      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "",
      });

      const parsed = parser.parse(xmlText);
      const channel = parsed?.rss?.channel;

      if (!channel) {
        throw new Error("Invalid RSS feed");
      }

      const rawItems = Array.isArray(channel.item)
        ? channel.item
        : channel.item
          ? [channel.item]
          : [];

      const items: FeedItem[] = rawItems.map((item: any) => ({
        title: item.title ?? "",
        link: item.link ?? "",
        guid: item.guid?.["#text"] ?? item.guid ?? "",
        pubDate: item.pubDate ?? "",
        imageUrl: item["media:content"]?.url,
      }));

      setData({
        title: channel.title ?? "",
        description: channel.description ?? "",
        link: channel.link ?? "",
        lastBuildDate: channel.lastBuildDate ?? "",
        language: channel.language ?? "",
        items,
      });
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return {
    data,
    loading,
    error,
    refetch: fetchFeed,
  };
}
