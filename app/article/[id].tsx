import { theme } from "@/src/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import {
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

const DUMMY_TEXT = `Dans på busserne, unge mennesker i lygtepælene og 4-0. Ja, vi husker nok alle sommeren 2021 med det danske fodboldlandshold.

Det har syntes langt væk i et stykke tid, hvor landsholdet har været mere præget af en stagneret offensiv og en lunken begejstring end eufori og folkefest. 

I torsdags genfandt Joakim Mæhle og Mikkel Damsgaard glimt af det niveau, de havde for snart fem år siden. 

Sammen med den dobbelte målscorer, Gustav Isaksen, i modsatte side af banen har deres samarbejde på Danmarks venstre kant gentændt en flig af dén begejstring for det danske landshold, mener DR Sportens fodboldkommentator, Andreas Kraul.

- Det føltes lidt som en fest i 2021. Stemningen i Parken var bedre, end den har været længe, og det var særligt Mikkel Damsgaard og Joakim Mæhle, der skabte den fest - både i torsdags og i 2021. De viste, at der stadig kan ske nogle magiske ting mellem de to.

- Når Damsgaard trækker ind i banen og bliver Danmarks playmaker, mens Mæhle bruger sine kvaliteter ude på kanten og ved at true forsvarets sidste linje med sine dybe løb, er det lidt som at se landsholdet fra for fire-fem år siden.

- Netop med de to kan man se, hvor meget relationer og indbyrdes forståelse betyder i fodbold, siger Kraul.`;

export default function ArticleScreen() {
  const router = useRouter();
  const { guid, item } = useLocalSearchParams<{
    guid: string;
    item?: string;
  }>();

  //Jeg vil have lavet et hook og fået data fra api via guid her. const {data, loading, error} = useArticleData(guid);
  const article: ArticleItem | null = item ? JSON.parse(item) : null;
  const formattedDate = article?.pubDate
    ? formatPublishedDate(article.pubDate)
    : null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            {article?.imageUrl ? (
              <Image
                source={{ uri: article.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                {/* <Text style={styles.imagePlaceholderText}>No image</Text> */}
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
            <Text style={styles.title}>
              {article?.title ?? "Untitled article"}
            </Text>

            {formattedDate && (
              <Text style={styles.pubDate}>{formattedDate}</Text>
            )}

            <Text style={styles.breadText}>{DUMMY_TEXT}</Text>

            {article?.link ? (
              <Pressable
                style={styles.linkButton}
                onPress={() => {
                  if (article?.link) {
                    void WebBrowser.openBrowserAsync(article?.link);
                  }
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
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowRadius: 18,
    elevation: 3,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
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
