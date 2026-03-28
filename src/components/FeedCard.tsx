import {
    Image,
    Linking,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

//TODO: maybe move to ts types file
export type FeedCardItem = {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  imageUrl?: string;
};

type FeedCardProps = {
  item: FeedCardItem;
  onPress?: (item: FeedCardItem) => void;
  loading?: boolean;
};

export function FeedCard({ item, onPress, loading }: FeedCardProps) {
  if (loading) {
    return <FeedCardSkeleton />;
  }

  const hasImage = !!item?.imageUrl;
  const formatedDate = formatPublishedDate(item.pubDate);

  const handlePress = () => {
    if (onPress) {
      onPress(item);
      return;
    }

    if (item.link) {
      void Linking.openURL(item.link);
    }
  };

  return (
    <Pressable onPress={handlePress} style={[styles.card]}>
      {hasImage ? (
        <Image
          source={{ uri: item.imageUrl as string }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>No image</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <Text style={styles.pubDate}>{formatedDate}</Text>
      </View>
    </Pressable>
  );
}

function FeedCardSkeleton() {
  return (
    <View style={styles.card}>
      <View style={[styles.image, styles.skeleton]} />

      <View style={styles.content}>
        <View style={[styles.skeleton, styles.skeletonTitle]} />
        <View style={[styles.skeleton, styles.skeletonText]} />
      </View>
    </View>
  );
}

function formatPublishedDate(pubDate: string) {
  return new Intl.DateTimeFormat("da-DK", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(pubDate));
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.92,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#E2E8F0",
  },
  imagePlaceholder: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF3F6",
  },
  imagePlaceholderText: {
    color: "#64748B",
    fontSize: 14,
  },
  content: {
    padding: 16,
    gap: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: "#0F172A",
  },
  pubDate: {
    fontSize: 13,
    color: "#64748B",
  },

  // skeleton styles
  skeleton: {
    backgroundColor: "#E2E8F0",
  },
  skeletonTitle: {
    height: 20,
    borderRadius: 6,
    width: "90%",
  },
  skeletonText: {
    height: 14,
    borderRadius: 6,
    width: "50%",
  },
});

export default FeedCard;
