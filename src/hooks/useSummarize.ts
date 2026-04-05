import { useState } from "react";

//This is a local server that will create an AI summary of the article text.
//you need to setup and run the following project locally: https://github.com/YousefMohsen/DR-llm
const SUMMARIZE_URL = "http://localhost:3000/summarize";

/**
 * Will create an AI summary of the article text.
 * @param bodyText - The text to summarize.
 * @returns The summary of the text.
 */
export function useSummarize(bodyText: string | null) {
  const [summary, setSummary] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryError, setSummaryError] = useState<string | null>(null);

  async function summarize() {
    if (!bodyText) return;
    setSummaryLoading(true);
    setSummaryError(null);
    setSummary(null);
    try {
      const res = await fetch(SUMMARIZE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: bodyText }),
      });
      if (!res.ok) throw new Error("Serverfejl – prøv igen.");
      const data = await res.json();
      setSummary(data.summary ?? null);
    } catch (e: any) {
      setSummaryError(e.message ?? "Ukendt fejl.");
    } finally {
      setSummaryLoading(false);
    }
  }

  return { summary, summaryLoading, summaryError, summarize };
}
