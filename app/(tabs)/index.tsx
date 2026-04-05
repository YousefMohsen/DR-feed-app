import { Feed } from "@/src/components/Feed";
import { NEWS_FEEDS } from "@/src/constants/rssUrls";
import { useFetchFeed } from "@/src/hooks/useFetchFeed";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { data, loading, error, refetch } = useFetchFeed(NEWS_FEEDS.latest.url);
  return (
    <SafeAreaView style={styles.container}>
      <Feed
        loading={loading}
        data={data}
        refetch={refetch}
        error={error}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>{data?.title || "Seneste nyt"}</Text>
            <Text style={styles.eyebrow}>Kort nyt</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 12,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    color: "#d60007",
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
