import { theme } from "@/src/constants/theme";
import {
  drArticleCanonicalUrl,
  useArticleByUrn,
  type DrArticle,
} from "@/src/hooks/useArticleByUrn";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ArticleItem = {
  guid: string;
  title: string;
  link?: string;
  description?: string;
  pubDate: string;
  imageUrl?: string;
};

function formatPublishedDate(pubDate: string) {
  return new Intl.DateTimeFormat("da-DK", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(pubDate));
}

/**
 * Combines partial + full article data into UI-ready fields. Prioritizes full article data when available.
 *
 * @param articleItem Article passed via navigation (have missing fields)
 * @param fullArticle Full article fetched from API (preferred when available)
 */
function getArticleFields(
  articleItem: ArticleItem | null,
  fullArticle: DrArticle | null,
) {
  const title = fullArticle?.title ?? articleItem?.title ?? "Untitled article";

  const imageUri =
    fullArticle?.teaserImage?.default?.url ??
    fullArticle?.teaserImage?.mobile?.url ??
    articleItem?.imageUrl;

  const hasImage = Boolean(imageUri);

  const bodyText =
    fullArticle?.text ??
    fullArticle?.summary ??
    articleItem?.description ??
    null;

  const linkUrl = fullArticle?.urlPathId
    ? drArticleCanonicalUrl(fullArticle.urlPathId)
    : articleItem?.link;

  const dateSource = fullArticle?.startDate ?? articleItem?.pubDate;
  const formattedDate = dateSource ? formatPublishedDate(dateSource) : null;

  return {
    title,
    hasImage,
    imageUri,
    bodyText,
    linkUrl,
    formattedDate,
  };
}

export default function ArticleScreen() {
  //TODO: add skeleton
  const router = useRouter();
  const { guid, item } = useLocalSearchParams<{
    guid: string;
    item?: string;
  }>();

  // we parse the article item from the navigation params.(image url and title etc.)
  const articleItem: ArticleItem | null = item ? JSON.parse(item) : null;

  // we fetch the full article data from the API.(body text, contributions etc)
  const { data: fullArticle, loading, error } = useArticleByUrn(guid);

  // we use title and imageurl untill we have the full article data from the API. Give better user experience.
  const { title, hasImage, imageUri, bodyText, linkUrl, formattedDate } =
    getArticleFields(articleItem, fullArticle);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            {hasImage ? (
              <Image
                source={{ uri: imageUri }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                {/**TODO: maybe remove placeholder if image is not available */}
                <Text style={styles.imagePlaceholderText}>
                  Billede ikke tilgængelig
                </Text>
              </View>
            )}
            <Pressable
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.backButtonPressed,
              ]}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={26} color="#FFFFFF" />
            </Pressable>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>

            {formattedDate && (
              <Text style={styles.pubDate}>{formattedDate}</Text>
            )}

            {loading && !bodyText ? (
              <View style={styles.loadingBody}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
              </View>
            ) : null}

            {error ? (
              <Text style={styles.errorText}>{error.message}</Text>
            ) : null}

            {bodyText ? (
              <Text style={styles.breadText}>{bodyText}</Text>
            ) : !loading && !error ? (
              <Text style={styles.breadText}>Ingen brødtekst tilgængelig.</Text>
            ) : null}

            {linkUrl ? (
              <Pressable
                style={styles.linkButton}
                onPress={() => {
                  void WebBrowser.openBrowserAsync(linkUrl);
                }}
              >
                <Text style={styles.linkButtonText}>Læs på DR.dk</Text>
                <Ionicons name="open-outline" size={20} color="#FFFFFF" />
              </Pressable>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    //  backgroundColor: "#FAF9F6",
    // borderRadius: 18,
    // overflow: "hidden",
    // borderWidth: 1,
    // borderColor: "#E2E8F0",
    // shadowRadius: 18,
    // elevation: 3,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    borderRadius: 18,
    overflow: "hidden",
  },
  backButton: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(15, 23, 42, 0.45)",
  },
  backButtonPressed: {
    opacity: 0.85,
  },
  image: {
    width: "100%",
    height: 240,
    backgroundColor: "#E2E8F0",
  },
  imagePlaceholder: {
    width: "100%",
    height: 240,
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
    gap: 12,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "700",
    color: "#0F172A",
  },
  pubDate: {
    fontSize: 13,
    color: "#64748B",
  },
  loadingBody: {
    paddingVertical: 24,
    alignItems: "center",
  },
  errorText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#B91C1C",
  },
  breadText: {
    fontSize: 16,
    lineHeight: 26,
    color: "#334155",
  },
  linkButton: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: theme.colors.primary,
  },
  linkButtonPressed: {
    opacity: 0.9,
  },
  linkButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  guid: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 8,
  },
});
