import { FeedCard, type FeedCardItem } from "@/src/components/FeedCard";
import { useRouter } from "expo-router";
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
  const router = useRouter();
  // if (error) {
  //   return <Text style={styles.info}>noget gik galt.</Text>;
  // }

  // if (!data) {
  //   return null;
  // }

  return (
    <FlatList
      keyExtractor={(item) => item.guid}
      renderItem={({ item, index }) => (
        <FeedCard
          // just for demostrating different variations of the feed card
          variation={index === 0 ? "featured" : "standard"}
          item={item}
          loading={loading}
          onPress={() =>
            router.push({
              pathname: "/article/[id]",
              params: {
                guid: item.guid,
                item: JSON.stringify(item), //TODO: only send image url and title. Can have performance effect if object is too large.
              },
            })
          }
        />
      )}
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
