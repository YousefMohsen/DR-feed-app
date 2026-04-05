import { StoryCard } from "@/src/components/StoryCard";
import type { StoryItem } from "@/src/hooks/useStories";
import { useState } from "react";
import { FlatList, LayoutChangeEvent, StyleSheet, View } from "react-native";

type StoriesData = {
  items: StoryItem[];
};

type StoriesFeedProps = {
  loading: boolean;
  data: StoriesData | null;
  refetch: () => Promise<void>;
  error: Error | null;
};

export function StoriesFeed({
  loading,
  data,
  refetch,
  error,
}: StoriesFeedProps) {
  const [pageHeight, setPageHeight] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const nextHeight = event.nativeEvent.layout.height;
    if (nextHeight !== pageHeight) {
      setPageHeight(nextHeight);
    }
  };

  if (!data?.items?.length) {
    return <View style={styles.container} onLayout={handleLayout} />;
  }

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {pageHeight > 0 && (
        <FlatList
          data={data.items}
          pagingEnabled
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.guid}
          renderItem={({ item }) => (
            <View style={{ height: pageHeight }}>
              <StoryCard item={item} pageHeight={pageHeight} />
            </View>
          )}
          refreshing={loading}
          onRefresh={refetch}
          getItemLayout={(_, index) => ({
            length: pageHeight,
            offset: pageHeight * index,
            index,
          })}
        />
      )}
    </View>
  );
}

export default StoriesFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});