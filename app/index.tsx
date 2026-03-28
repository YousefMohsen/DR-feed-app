import { NEWS_FEEDS } from "@/src/constants/rssUrls";
import { useFetchFeed } from "@/src/hooks/useFetchFeed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { data, loading, error } = useFetchFeed(NEWS_FEEDS.latest.url);
  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.subtitle}>{data?.description}</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
});
