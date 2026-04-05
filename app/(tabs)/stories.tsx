import StoriesFeed from "@/src/components/StoriesFeed";
import { useStories } from "@/src/hooks/useStories";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function StoriesScreen() {
  //Todo maybe move inside storeisFeed.tsx
  const { data, loading, error, refetch } = useStories();

  return (
    <SafeAreaView style={styles.container}>
      <StoriesFeed
        loading={loading}
        data={data}
        refetch={refetch}
        error={error}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    justifyContent: "center",
  },
});
