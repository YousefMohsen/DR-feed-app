import { Feed } from "@/src/components/Feed";
import { NEWS_FEEDS } from "@/src/constants/rssUrls";
import { useFetchFeed } from "@/src/hooks/useFetchFeed";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { data, loading, error, refetch } = useFetchFeed(NEWS_FEEDS.latest.url);
  return (
    <View style={styles.container}>
      <Feed
        loading={loading}
        data={data}
        refetch={refetch}
        error={error}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.eyebrow}>{data?.description}</Text>
            <Text style={styles.title}>{data?.title || "Seneste nyt"}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    paddingHorizontal: 20,
    paddingTop: 72,
    paddingBottom: 32,
  },
  header: {
    paddingBottom: 16,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    color: "#005A8D",
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 10,
    color: "#11181C",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
    color: "#11181C",
    marginBottom: 24,
  },
});
