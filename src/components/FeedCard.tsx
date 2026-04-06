import { formatPublishedDate } from "@/src/utils/utils";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type FeedCardItem = {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  imageUrl?: string;
};

export type FeedCardVariation = "standard" | "featured";

/**
 * The height of the image in the feed card. Two variations available.
 */
const IMAGE_HEIGHT: Record<FeedCardVariation, number> = {
  standard: 180,
  featured: 232,
};

type FeedCardProps = {
  item: FeedCardItem;
  onPress?: (item: FeedCardItem) => void;
  loading?: boolean;
  variation?: FeedCardVariation;
};

export function FeedCard({
  item,
  onPress,
  loading = false,
  variation = "standard",
}: FeedCardProps) {
  if (loading) {
    return <FeedCardSkeleton variation={variation} />;
  }

  const isFeatured = variation === "featured";
  const formattedDate = formatPublishedDate(item.pubDate);

  return (
    <Pressable
      onPress={() => onPress?.(item)}
      style={({ pressed }) => [
        styles.card,
        isFeatured && styles.cardFeatured,
        pressed && styles.cardPressed,
      ]}
    >
      {item.imageUrl && (
        <Image
          source={{ uri: item.imageUrl }}
          style={[styles.image, { height: IMAGE_HEIGHT[variation] }]}
          resizeMode="cover"
        />
      )}

      <View style={[styles.content, isFeatured && styles.contentFeatured]}>
        {isFeatured && <Text style={styles.featuredLabel}>Breaking</Text>}

        <Text
          style={[styles.title, isFeatured && styles.titleFeatured]}
          numberOfLines={isFeatured ? 4 : 3}
        >
          {item.title}
        </Text>

        <Text style={styles.pubDate}>{formattedDate}</Text>
      </View>
    </Pressable>
  );
}

function FeedCardSkeleton({
  variation = "standard",
}: {
  variation?: FeedCardVariation;
}) {
  const isFeatured = variation === "featured";

  return (
    <View style={[styles.card, isFeatured && styles.cardFeatured]}>
      <View
        style={[
          styles.image,
          styles.skeleton,
          { height: IMAGE_HEIGHT[variation] },
        ]}
      />

      <View style={[styles.content, isFeatured && styles.contentFeatured]}>
        {isFeatured && (
          <View style={[styles.skeleton, styles.skeletonFeaturedLabel]} />
        )}
        <View style={[styles.skeleton, styles.skeletonTitle]} />
        <View style={[styles.skeleton, styles.skeletonText]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  cardFeatured: {
    borderLeftWidth: 4,
    borderLeftColor: "#F8DA49",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 8,
  },
  cardPressed: {
    opacity: 0.92,
  },
  image: {
    width: "100%",
    backgroundColor: "#E2E8F0",
  },
  imageFallback: {
    width: "100%",
    backgroundColor: "#E2E8F0",
  },
  content: {
    padding: 16,
    gap: 10,
  },
  contentFeatured: {
    backgroundColor: "#FFFBEB",
    paddingVertical: 18,
    gap: 8,
  },
  featuredLabel: {
    alignSelf: "flex-start",
    fontSize: 11,
    fontWeight: "700",
    color: "#0F172A",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    backgroundColor: "#F8DA49",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: "#0F172A",
  },
  titleFeatured: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "800",
  },
  pubDate: {
    fontSize: 13,
    color: "#64748B",
  },
  skeleton: {
    backgroundColor: "#E2E8F0",
  },
  skeletonFeaturedLabel: {
    height: 22,
    width: 88,
    borderRadius: 6,
    marginBottom: 2,
    backgroundColor: "rgba(248, 218, 73, 0.45)",
  },
  skeletonTitle: {
    height: 20,
    width: "90%",
    borderRadius: 6,
  },
  skeletonText: {
    height: 14,
    width: "50%",
    borderRadius: 6,
  },
});

export default FeedCard;
