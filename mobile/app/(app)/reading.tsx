import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Image,
  Animated,
  Share,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { spacing, fontSize, borderRadius } from "../../constants/theme";
import { ROUTES } from "../../constants/navigation";
import { TarotCard, TarotReading } from "../../types/index";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "../../contexts/AppContext";
import { SpreadLayout } from "../../types";
import { getLayoutCardCount } from "../../constants/layouts";
import CelticCrossPreview from "../../components/CelticCrossPreview";
import ThreeCardPreview from "../../components/ThreeCardPreview";
import HorseshoePreview from "../../components/HorseshoePreview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const mockReadingResponse = {
  reading:
    "Bu kartlar, önünüzdeki dönemde önemli bir değişim sürecine işaret ediyor. İlk kart, geçmişten gelen deneyimlerinizin size yol göstereceğini belirtiyor. İkinci kart, şu anki durumunuzda sabırlı olmanız gerektiğini gösteriyor. Son kart ise, yakın gelecekte alacağınız bir kararın uzun vadeli etkiler yaratacağını işaret ediyor. Bu süreçte içgüdülerinize güvenmeniz ve aceleci kararlardan kaçınmanız önemli olacak.",
  success: true,
};

interface TarotSpread {
  [key: string]: {
    cardNumber: number;
    cardName: string;
    cardMeaning: string;
  };
}

export default function Reading() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    question: string;
    cards: string;
    layout: SpreadLayout;
    fromHistory?: string;
    readingId?: string;
  }>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [reading, setReading] = useState<string | null>(null);
  const [readingId, setReadingId] = useState<string | null>(null);
  const { colors, tr, language } = useApp();
  const fadeAnims = cards.map(() => new Animated.Value(0));

  useEffect(() => {
    const loadReading = async () => {
      try {
        if (!params.cards || !params.layout || !params.readingId) {
          throw new Error("Invalid parameters");
        }

        if (params.fromHistory === "true" && params.readingId) {
          const savedReadings = await AsyncStorage.getItem("tarot_readings");
          if (savedReadings) {
            const readings: TarotReading[] = JSON.parse(savedReadings);
            const savedReading = readings.find(
              (r) => r.id === params.readingId
            );
            if (savedReading) {
              setCards(savedReading.cards);
              setReading(savedReading.freeReading);
              setReadingId(savedReading.id);
              return;
            }
          }
        }

        const selectedCards = JSON.parse(params.cards) as TarotCard[];
        if (!Array.isArray(selectedCards)) {
          throw new Error("Invalid card selection");
        }

        const requiredCards = getLayoutCardCount(params.layout);
        if (selectedCards.length !== requiredCards) {
          throw new Error(`Invalid number of cards. Expected ${requiredCards}`);
        }

        setCards(selectedCards);
        setReadingId(params.readingId);

        const savedReadings = await AsyncStorage.getItem("tarot_readings");
        const readings: TarotReading[] = savedReadings
          ? JSON.parse(savedReadings)
          : [];

        if (!readings.some((r) => r.id === params.readingId)) {
          const newReading: TarotReading = {
            id: params.readingId,
            date: new Date().toISOString(),
            question: params.question,
            layout: params.layout,
            cards: selectedCards,
            freeReading: "",
          };
          readings.unshift(newReading);
          await AsyncStorage.setItem(
            "tarot_readings",
            JSON.stringify(readings)
          );
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        console.error("Reading error:", err);
      }
    };

    loadReading();
  }, [
    params.cards,
    params.layout,
    params.fromHistory,
    params.readingId,
    params.question,
  ]);

  useEffect(() => {
    if (cards.length > 0) {
      cards.forEach((_, index) => {
        Animated.timing(fadeAnims[index], {
          toValue: 1,
          duration: 500,
          delay: index * 300,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [cards]);

  const handleGetReading = async () => {
    try {
      setLoading(true);

      const spread: TarotSpread = cards.reduce(
        (acc, card, index) => ({
          ...acc,
          [index]: {
            cardNumber: index + 1,
            cardName: card.name,
            cardMeaning:
              tr.cards.meanings[card.name as keyof typeof tr.cards.meanings],
          },
        }),
        {}
      );

      const response = await axios.post("http://localhost:3000/tarot/reading", {
        question: params.question,
        language: language,
        spread: spread,
        spreadType: params.layout,
      });
      console.log(response.data);
      setReading(response.data);
    } catch (error) {
      console.error("Error fetching reading:", error);
    }
  };

  const handleGetReadingSimulated = useCallback(async () => {
    try {
      setLoading(true);

      const requestData = {
        cards: cards.map((card) => card.id),
        question: params.question,
        layout: params.layout,
      };

      console.log("Sending request to API:", requestData);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = mockReadingResponse;

      if (response.success) {
        setReading(response.reading);

        if (readingId) {
          const savedReadings = await AsyncStorage.getItem("tarot_readings");
          if (savedReadings) {
            const readings: TarotReading[] = JSON.parse(savedReadings);
            const updatedReadings = readings.map((r) => {
              if (r.id === readingId) {
                return {
                  ...r,
                  freeReading: response.reading,
                };
              }
              return r;
            });
            await AsyncStorage.setItem(
              "tarot_readings",
              JSON.stringify(updatedReadings)
            );
          }
        }
      } else {
        throw new Error("Failed to get reading");
      }
    } catch (err) {
      Alert.alert(tr.common.error, tr.common.errorMessage);
    } finally {
      setLoading(false);
    }
  }, [
    cards,
    params.question,
    params.layout,
    tr.common.error,
    tr.common.errorMessage,
    readingId,
  ]);

  const handleShare = async () => {
    try {
      const message =
        `🔮 Tarot Açılımım\n\n` +
        `Soru: ${params.question}\n\n` +
        `Kartlar:\n${cards
          .map((card, index) => `${index + 1}. ${card.name}`)
          .join("\n")}\n\n` +
        (reading ? `Yorum:\n${reading}` : "");

      await Share.share({
        message,
      });
    } catch (error) {
      console.error("Share error:", error);
    }
  };

  const renderPreview = () => {
    if (!cards.length) return null;

    switch (params.layout) {
      case "three-card":
        return <ThreeCardPreview cards={cards} colors={colors} />;
      case "celtic-cross":
        return <CelticCrossPreview cards={cards} colors={colors} />;
      case "horseshoe":
        return <HorseshoePreview cards={cards} colors={colors} />;
      default:
        return null;
    }
  };

  if (error || !params.question || !cards.length) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <StatusBar style="light" />
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: colors.text }]}>
            {error || tr.common.errorMessage}
          </Text>
          <TouchableOpacity
            style={[styles.errorButton, { backgroundColor: colors.primary }]}
            onPress={() => router.back()}
          >
            <Text style={[styles.errorButtonText, { color: colors.white }]}>
              {tr.common.back}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (params.fromHistory === "true") {
              router.back(); // History'den geldiyse geri dön
            } else {
              router.push(ROUTES.HOME); // Normal akışta ana sayfaya git
            }
          }}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: colors.text }]}>
            {tr.screens.reading.title}
          </Text>
          <Text style={[styles.question, { color: colors.textSecondary }]}>
            {params.question}
          </Text>
        </View>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View
          style={[
            styles.previewContainer,
            { backgroundColor: colors.cardBackground },
          ]}
        >
          {renderPreview()}
        </View>

        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <Animated.View
              key={card.id}
              style={[
                styles.card,
                { backgroundColor: colors.cardBackground },
                { opacity: fadeAnims[index] },
              ]}
            >
              <Image
                source={card.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.cardContent}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>
                  {card.name}
                </Text>
                <Text
                  style={[
                    styles.cardDescription,
                    { color: colors.textSecondary },
                  ]}
                >
                  {
                    tr.cards.meanings[
                      card.name as keyof typeof tr.cards.meanings
                    ]
                  }
                </Text>
              </View>
            </Animated.View>
          ))}
        </View>

        {reading && (
          <View
            style={[
              styles.readingContainer,
              { backgroundColor: colors.cardBackground },
            ]}
          >
            <Text style={[styles.readingText, { color: colors.text }]}>
              {reading}
            </Text>
          </View>
        )}

        {!reading && (
          <TouchableOpacity
            style={[
              styles.getReadingButton,
              { backgroundColor: colors.primary },
              loading && { opacity: 0.5 },
            ]}
            onPress={handleGetReading}
            disabled={loading}
          >
            <Text
              style={[styles.getReadingButtonText, { color: colors.white }]}
            >
              {loading ? tr.common.loading : tr.screens.reading.getReading}
            </Text>
            {loading && (
              <ActivityIndicator style={styles.loader} color={colors.white} />
            )}
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.newReadingButton,
            { backgroundColor: colors.cardBackground },
          ]}
          onPress={() => router.push(ROUTES.HOME)}
          disabled={loading}
        >
          <Text style={[styles.newReadingButtonText, { color: colors.text }]}>
            {tr.screens.reading.newReading}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: spacing.large,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: spacing.small,
    marginRight: spacing.small,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.xlarge,
    fontWeight: "bold",
  },
  question: {
    fontSize: fontSize.large,
    fontWeight: "600",
    marginTop: spacing.small,
  },
  content: {
    padding: spacing.medium,
  },
  previewContainer: {
    borderRadius: borderRadius.medium,
    marginBottom: spacing.medium,
    padding: spacing.small,
    alignItems: "center",
  },
  cardsContainer: {
    gap: spacing.medium,
    marginBottom: spacing.medium,
  },
  card: {
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    flexDirection: "row",
    gap: spacing.medium,
  },
  cardImage: {
    width: 80,
    height: 120,
    borderRadius: borderRadius.small,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: fontSize.large,
    fontWeight: "600",
    marginBottom: spacing.small,
  },
  cardDescription: {
    fontSize: fontSize.medium,
    lineHeight: fontSize.medium * 1.5,
  },
  readingContainer: {
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    marginBottom: spacing.medium,
  },
  readingText: {
    fontSize: fontSize.medium,
    lineHeight: fontSize.medium * 1.5,
  },
  getReadingButton: {
    flexDirection: "row",
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.medium,
  },
  getReadingButtonText: {
    fontSize: fontSize.medium,
    fontWeight: "bold",
  },
  loader: {
    marginLeft: spacing.small,
  },
  newReadingButton: {
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    alignItems: "center",
    marginBottom: spacing.xlarge,
  },
  newReadingButtonText: {
    fontSize: fontSize.medium,
    fontWeight: "500",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.large,
  },
  errorText: {
    fontSize: fontSize.large,
    textAlign: "center",
    marginBottom: spacing.large,
  },
  errorButton: {
    padding: spacing.medium,
    borderRadius: borderRadius.medium,
  },
  errorButtonText: {
    fontSize: fontSize.medium,
    fontWeight: "bold",
  },
  shareButton: {
    padding: spacing.small,
    marginLeft: spacing.small,
  },
});
