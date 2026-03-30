import { Feed } from "@/src/components/Feed";
import { FeedFilter } from "@/src/components/FeedSelector";
import { NEWS_FEEDS, NewsFeedKey } from "@/src/constants/rssUrls";
import { useFetchFeed } from "@/src/hooks/useFetchFeed";
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ExploreScreen() {
  // state for the selected feed
  const [selectedFeed, setSelectedFeed] = useState<NewsFeedKey>("latest");
  // format the feeds for the filter component
  const filterItems = useMemo(() => {
    return Object.entries(NEWS_FEEDS).map(([key, feed]) => ({
      key,
      label: feed.label,
    }));
  }, []);

  // get the selected feed url
  const selectedUrl = NEWS_FEEDS[selectedFeed].url;
  // fetch the feed data
  const { data, loading, error, refetch } = useFetchFeed(selectedUrl);

  return (
    <SafeAreaView style={styles.container}>
      <FeedFilter
        items={filterItems}
        selectedKey={selectedFeed}
        onSelect={(key) => setSelectedFeed(key as NewsFeedKey)}
        style={styles.filter}
      />
      <Feed loading={loading} data={data} refetch={refetch} error={error} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    color: "#11181C",
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.85,
    textAlign: "center",
    color: "#11181C",
  },
  filter: {
    marginBottom: 16,
  },
});
