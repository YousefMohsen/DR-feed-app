import { theme } from "@/src/constants/theme";
import {
  drArticleCanonicalUrl,
  useArticleByUrn,
} from "@/src/hooks/useArticleByUrn";
import { useSpeech } from "@/src/hooks/useSpeech";
import { useSummarize } from "@/src/hooks/useSummarize";
import { formatPublishedDate } from "@/src/utils/utils";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useCallback } from "react";
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

//Maybe move to ts types file
type ArticleItem = {
  guid: string;
  title: string;
  link?: string;
  description?: string;
  pubDate: string;
  imageUrl?: string;
};

export default function ArticleScreen() {
  const router = useRouter();
  //get article id and feedcard item from the router params
  const { guid, item } = useLocalSearchParams<{
    guid: string;
    item?: string;
  }>();
  //parse rrs-item.
  // const articleItem: ArticleItem | null = item ? JSON.parse(item) : null;
  // will fetch the article from the graphql API
  const { data: fullArticle, loading, error } = useArticleByUrn(guid);

  // will use the system's text-to-speech to read the article text
  const { stop, toggleSpeak, isReading } = useSpeech();
  // will create an AI summary of the article text
  const { summary, summaryLoading, summaryError, summarize } = useSummarize(
    fullArticle?.text ?? null,
  );

  const title = fullArticle?.title ?? "-";
  // will get the image from the article and fallback to the RSS feed image
  const imageUri =
    fullArticle?.teaserImage?.default?.url ??
    fullArticle?.teaserImage?.mobile?.url;

  const linkUrl = fullArticle?.urlPathId
    ? drArticleCanonicalUrl(fullArticle.urlPathId)
    : null;

  const dateSource = fullArticle?.startDate;
  const formattedDate = dateSource ? formatPublishedDate(dateSource) : null;

  // Stop speech when navigating away
  useFocusEffect(
    useCallback(() => {
      return () => stop();
    }, [stop]),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder}>
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

            {/* Action buttons */}
            <View style={styles.actionRow}>
              <Pressable
                style={({ pressed }) => [
                  styles.actionButton,
                  pressed && styles.actionButtonPressed,
                  !fullArticle?.text && styles.actionButtonDisabled,
                ]}
                onPress={summarize}
                disabled={!fullArticle?.text || summaryLoading}
              >
                {summaryLoading ? (
                  <ActivityIndicator
                    size="small"
                    color={theme.colors.primary}
                  />
                ) : (
                  <Ionicons
                    name="sparkles-outline"
                    size={18}
                    color={theme.colors.primary}
                  />
                )}
                <Text style={styles.actionButtonText}>
                  {summaryLoading ? "Opsummerer…" : "Opsummer artikel"}
                </Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.actionButton,
                  pressed && styles.actionButtonPressed,
                  !fullArticle?.text &&
                    !isReading &&
                    styles.actionButtonDisabled,
                ]}
                onPress={() =>
                  fullArticle?.text && toggleSpeak(fullArticle.text)
                }
                disabled={!fullArticle?.text && !isReading}
              >
                <Ionicons
                  name={
                    isReading ? "stop-circle-outline" : "volume-high-outline"
                  }
                  size={18}
                  color={theme.colors.primary}
                />
                <Text style={styles.actionButtonText}>
                  {isReading ? "Stop" : "Læs op"}
                </Text>
              </Pressable>
            </View>

            {/* Summary box */}
            {summaryError && (
              <View style={styles.summaryBox}>
                <Text style={styles.summaryError}>{summaryError}</Text>
              </View>
            )}
            {summary && (
              <View style={styles.summaryBox}>
                <View style={styles.summaryHeader}>
                  <Ionicons
                    name="sparkles"
                    size={14}
                    color={theme.colors.primary}
                  />
                  <Text style={styles.summaryLabel}>AI-opsummering</Text>
                </View>
                <Text style={styles.summaryText}>{summary}</Text>
              </View>
            )}

            {loading && !fullArticle?.text ? (
              <View style={styles.loadingBody}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
              </View>
            ) : null}
            {error ? (
              <Text style={styles.errorText}>{error.message}</Text>
            ) : null}
            {fullArticle?.text ? (
              <Text style={styles.breadText}>{fullArticle.text}</Text>
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
  safeArea: { flex: 1, backgroundColor: "#FAF9F6" },
  container: { paddingHorizontal: 16, paddingVertical: 12 },
  card: {},
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
  backButtonPressed: { opacity: 0.85 },
  image: { width: "100%", height: 240, backgroundColor: "#E2E8F0" },
  imagePlaceholder: {
    width: "100%",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF3F6",
  },
  imagePlaceholderText: { color: "#64748B", fontSize: 14 },
  content: { padding: 16, gap: 12 },
  title: { fontSize: 26, lineHeight: 32, fontWeight: "700", color: "#0F172A" },
  pubDate: { fontSize: 13, color: "#64748B" },

  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 6,
    borderRadius: 8,
  },
  actionButtonPressed: { opacity: 0.5 },
  actionButtonDisabled: { opacity: 0.35 },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: theme.colors.primary,
  },

  summaryBox: {
    backgroundColor: "#F0F7FF",
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
    borderRadius: 10,
    padding: 14,
    gap: 6,
  },
  summaryHeader: { flexDirection: "row", alignItems: "center", gap: 5 },
  summaryLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: theme.colors.primary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  summaryText: { fontSize: 15, lineHeight: 23, color: "#1E3A5F" },
  summaryError: { fontSize: 14, color: "#B91C1C" },

  loadingBody: { paddingVertical: 24, alignItems: "center" },
  errorText: { fontSize: 15, lineHeight: 22, color: "#B91C1C" },
  breadText: { fontSize: 16, lineHeight: 26, color: "#334155" },
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
  linkButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
});
