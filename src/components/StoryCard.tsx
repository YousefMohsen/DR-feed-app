import type {
  BodyTextCard,
  BylineCard,
  CoverCard,
  HeadingCard,
  QuoteCard,
  StoryCardData,
  StoryItem,
} from "@/src/hooks/useStories";
import { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type StoryCardProps = {
  item: StoryItem;
  pageHeight: number;
};

export function StoryCard({ item, pageHeight }: StoryCardProps) {
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const total = item.cards.length;

  return (
    <View style={[styles.root, { height: pageHeight }]}>
      <Animated.FlatList
        data={item.cards}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => `${item.guid}-card-${i}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ item: card }) => (
          <View style={{ width, height: pageHeight }}>
            <CardPage card={card} height={pageHeight} />
          </View>
        )}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      <View style={styles.pips} pointerEvents="none">
        {Array.from({ length: total }).map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.2, 1, 0.2],
            extrapolate: "clamp",
          });
          const scaleX = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [1, 2.8, 1],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={[styles.pip, { opacity, transform: [{ scaleX }] }]}
            />
          );
        })}
      </View>
    </View>
  );
}

type CardPageProps = { card: StoryCardData; height: number };

function CardPage({ card, height }: CardPageProps) {
  switch (card.type) {
    case "cover":
      return <Cover card={card} height={height} />;
    case "heading":
      return <Heading card={card} height={height} />;
    case "body-text":
      return <BodyText card={card} height={height} />;
    case "quote":
      return <Quote card={card} height={height} />;
    case "byline":
      return <Byline card={card} height={height} />;
  }
}

// ─── Cover ────────────────────────────────────────────────────────────────────

function Cover({ card, height }: { card: CoverCard; height: number }) {
  const readingMins = Math.ceil(card.wordCount / 200);

  return (
    <View style={[styles.coverRoot, { height }]}>
      {card.image ? (
        <Image
          source={{ uri: card.image }}
          style={[styles.coverImage]}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.coverImageFallback} />
      )}

      <View style={styles.coverBody}>
        <View style={styles.coverTopRow}>
          {card.breaking && (
            <View style={styles.breakingBadge}>
              <Text style={styles.breakingText}>BREAKING</Text>
            </View>
          )}
          <Text style={styles.coverDate}>{formatDate(card.date)}</Text>
        </View>

        <Text style={styles.coverTitle}>{card.title}</Text>
        <Text style={styles.coverSubtitle}>{card.subtitle}</Text>

        <View style={styles.coverMeta}>
          <View style={styles.metaPill}>
            <Text style={styles.metaPillText}>{readingMins} min læsning</Text>
          </View>
          <View style={styles.metaPill}>
            <Text style={styles.metaPillText}>{card.wordCount} ord</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// ─── Heading ─────────────────────────────────────────────────────────────────

function Heading({ card, height }: { card: HeadingCard; height: number }) {
  return (
    <View style={[styles.headingRoot, { height }]}>
      <View style={styles.headingRule} />
      <Text style={styles.headingText}>{card.text}</Text>
    </View>
  );
}

// ─── Body text ────────────────────────────────────────────────────────────────

function BodyText({ card, height }: { card: BodyTextCard; height: number }) {
  // Detect dialogue lines (start with "- ") for special treatment
  const isDialogue = card.text.startsWith("- ");

  return (
    <View style={[styles.bodyRoot, { height }]}>
      {isDialogue && <View style={styles.dialogueLine} />}
      <Text style={[styles.bodyText, isDialogue && styles.bodyTextDialogue]}>
        {card.text}
      </Text>
    </View>
  );
}

// ─── Quote ───────────────────────────────────────────────────────────────────

function Quote({ card, height }: { card: QuoteCard; height: number }) {
  return (
    <View style={[styles.quoteRoot, { height }]}>
      <Text style={styles.quoteMark}>"</Text>
      <Text style={styles.quoteBody}>{card.body}</Text>
      {card.citation && (
        <Text style={styles.quoteCitation}>— {card.citation}</Text>
      )}
    </View>
  );
}

// ─── Byline ──────────────────────────────────────────────────────────────────

function Byline({ card, height }: { card: BylineCard; height: number }) {
  return (
    <View style={[styles.bylineRoot, { height }]}>
      <View style={styles.bylineDivider} />
      <Text style={styles.bylineLabel}>ARTIKEL AF</Text>
      {card.contributors.map((c, i) => (
        <View key={i} style={styles.bylineRow}>
          <View style={styles.bylineAvatar}>
            <Text style={styles.bylineAvatarLetter}>
              {(c.title ?? c.role ?? "?")[0].toUpperCase()}
            </Text>
          </View>
          <View>
            <Text style={styles.bylineName}>{c.title?.trim() || "–"}</Text>
            {c.role && <Text style={styles.bylineRole}>{c.role}</Text>}
          </View>
        </View>
      ))}
    </View>
  );
}

// ─── Util ─────────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

// ─── Design tokens ───────────────────────────────────────────────────────────

const C = {
  bg: "#FAF9F6", // warm off-white
  surface: "#FFFFFF",
  surfaceAlt: "#F0EDE8", // warm cream
  border: "#E2DDD8",
  accent: "#C0392B", // DR red — editorial, strong
  accentLight: "#FDECEA",
  ink: "#1A1714", // warm near-black
  inkMid: "#5C5651",
  inkLight: "#9C9590",
};

const styles = StyleSheet.create({
  root: { backgroundColor: C.bg },

  // Pips
  pips: {
    position: "absolute",
    bottom: 18,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  pip: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: C.accent,
  },

  // Cover
  coverRoot: {
    backgroundColor: C.bg,
    flexDirection: "column",
  },
  coverImage: {
    width: "100%",
    height: "48%",
  },
  coverImageFallback: {
    width: "100%",
    height: "48%",
    backgroundColor: C.surfaceAlt,
  },
  coverBody: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    gap: 10,
  },
  coverTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  breakingBadge: {
    backgroundColor: C.accent,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
  },
  breakingText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1.5,
  },
  coverDate: {
    fontSize: 12,
    color: C.inkLight,
    fontWeight: "500",
  },
  coverTitle: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "800",
    color: C.ink,
    letterSpacing: -0.4,
    marginTop: 4,
  },
  coverSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: C.inkMid,
    fontWeight: "400",
  },
  coverMeta: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  metaPill: {
    backgroundColor: C.surfaceAlt,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: C.border,
  },
  metaPillText: {
    fontSize: 12,
    color: C.inkMid,
    fontWeight: "600",
  },

  // Heading
  headingRoot: {
    backgroundColor: C.surfaceAlt,
    justifyContent: "center",
    paddingHorizontal: 28,
    gap: 16,
  },
  headingRule: {
    width: 36,
    height: 3,
    borderRadius: 2,
    backgroundColor: C.accent,
  },
  headingText: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "800",
    color: C.ink,
    letterSpacing: -0.5,
  },

  // Body text
  bodyRoot: {
    backgroundColor: C.surface,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 32,
    gap: 16,
  },
  dialogueLine: {
    width: 3,
    height: 36,
    borderRadius: 2,
    backgroundColor: C.accent,
  },
  bodyText: {
    fontSize: 19,
    lineHeight: 30,
    fontWeight: "400",
    color: C.ink,
  },
  bodyTextDialogue: {
    fontStyle: "italic",
    color: C.inkMid,
  },

  // Quote
  quoteRoot: {
    backgroundColor: C.accentLight,
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 12,
  },
  quoteMark: {
    fontSize: 80,
    lineHeight: 70,
    // color: C.accent,
    fontWeight: "900",
  },
  quoteBody: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "700",
    // color: C.ink,
    fontStyle: "italic",
    letterSpacing: -0.2,
  },
  quoteCitation: {
    fontSize: 13,
    //  color: C.inkMid,
    fontWeight: "500",
    marginTop: 4,
  },

  // Byline
  bylineRoot: {
    backgroundColor: C.bg,
    justifyContent: "center",
    paddingHorizontal: 28,
    gap: 16,
  },
  bylineDivider: {
    height: 1,
    backgroundColor: C.border,
    marginBottom: 8,
  },
  bylineLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: C.accent,
    letterSpacing: 2.5,
  },
  bylineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  bylineAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: C.surfaceAlt,
    borderWidth: 1,
    borderColor: C.border,
    justifyContent: "center",
    alignItems: "center",
  },
  bylineAvatarLetter: {
    fontSize: 18,
    fontWeight: "800",
    color: C.accent,
  },
  bylineName: {
    fontSize: 16,
    fontWeight: "700",
    color: C.ink,
  },
  bylineRole: {
    fontSize: 13,
    color: C.inkMid,
    marginTop: 2,
  },
});
