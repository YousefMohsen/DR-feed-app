/**
 * Formats the date to a danish human readable format
 */
export function formatPublishedDate(pubDate: string) {
  return new Intl.DateTimeFormat("da-DK", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(pubDate));
}
