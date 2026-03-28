import { FeedCard, type FeedCardItem } from "@/src/components/FeedCard";
import { FlatList, type FlatListProps, StyleSheet, View } from "react-native";

type FeedData = {
  items: FeedCardItem[];
};

type FeedProps = {
  loading: boolean;
  data: FeedData | null;
  refetch: () => Promise<void>;
  error: Error | null;
} & Omit<
  FlatListProps<FeedCardItem>,
  "data" | "renderItem" | "keyExtractor" | "refreshing" | "onRefresh"
>;

export function Feed({
  loading,
  data,
  refetch: _refetch,
  error,
  ...flatListProps
}: FeedProps) {
  // if (error) {
  //   return <Text style={styles.info}>noget gik galt.</Text>;
  // }

  // if (!data) {
  //   return null;
  // }

  return (
    <FlatList
      keyExtractor={(item) => item.guid}
      renderItem={({ item }) => <FeedCard item={item} loading={loading} />}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      data={data?.items}
      refreshing={loading}
      onRefresh={_refetch}
      {...flatListProps}
    />
  );
}

const styles = StyleSheet.create({
  info: {
    fontSize: 14,
    color: "#5F6C72",
  },
  list: {
    gap: 16,
  },
});
