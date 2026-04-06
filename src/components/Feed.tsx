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

/**
 * A feed component that displays a list of DR articles.
 * @param loading - Whether the feed is loading.
 * @param data - The feed data.
 * @param refetch - A function to refetch the feed.
 * @param error - An error object if the feed fails to load.
 * @param flatListProps - Additional props to pass to the FlatList component.
 */
export function Feed({
  loading,
  data,
  refetch,
  error,
  ...flatListProps
}: FeedProps) {
  const router = useRouter();

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
      onRefresh={refetch}
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
