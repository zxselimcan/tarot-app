import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter, useLocalSearchParams } from "expo-router";
import { spacing, fontSize, borderRadius } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "../../contexts/AppContext";
import { TAROT_CARDS } from "../../constants/cardData";
import { getLayoutCardCount } from "../../constants/layouts";
import { useState, useEffect } from "react";
import { ROUTES } from "../../constants/navigation";
import { CARD_MAP } from "../../constants/cardMap";
import { SpreadLayout } from "../../types";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Cards() {
  const router = useRouter();
  const { question, layout, readingId } = useLocalSearchParams<{
    question: string;
    layout: SpreadLayout;
    readingId: string;
  }>();
  const { colors, tr } = useApp();
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);

  useEffect(() => {
    if (!question || !layout) {
      router.back();
      return;
    }

    const cardIndices = Array.from({ length: CARD_MAP.length }, (_, i) => i);
    setShuffledCards(shuffleArray(cardIndices));
  }, [question, layout, router]);

  const requiredCards = layout ? getLayoutCardCount(layout as SpreadLayout) : 0;
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardSelect = (cardIndex: number) => {
    setSelectedCards((prev) => {
      if (prev.includes(cardIndex)) {
        return prev.filter((i) => i !== cardIndex);
      }
      if (prev.length < requiredCards) {
        return [...prev, cardIndex];
      }
      return prev;
    });
  };

  const handleContinue = () => {
    if (selectedCards.length === requiredCards && question && layout) {
      const selectedCardData = selectedCards.map((index) => ({
        id: shuffledCards[index] + 1,
        name: CARD_MAP[shuffledCards[index]],
        image: TAROT_CARDS[CARD_MAP[shuffledCards[index]]].image,
        meaning: tr.cards.meanings[CARD_MAP[shuffledCards[index]]],
        description: tr.cards.meanings[CARD_MAP[shuffledCards[index]]],
      }));

      router.push({
        pathname: ROUTES.READING,
        params: {
          cards: JSON.stringify(selectedCardData),
          question,
          layout,
          readingId,
        },
      });
    }
  };

  if (!question || !layout || !shuffledCards.length) {
    return null;
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: colors.text }]}>
            {tr.screens.cards.title}
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {tr.screens.cards.selectCards.replace(
              "{{count}}",
              requiredCards.toString()
            )}
          </Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {shuffledCards.map((cardIndex, index) => {
            const isSelected = selectedCards.includes(index);
            return (
              <TouchableOpacity
                key={cardIndex}
                style={[
                  styles.card,
                  { backgroundColor: colors.cardBackground },
                  isSelected && styles.selectedCard,
                ]}
                onPress={() => handleCardSelect(index)}
                disabled={selectedCards.length >= requiredCards && !isSelected}
              >
                <Image
                  source={TAROT_CARDS["Card Back"].image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                {isSelected && (
                  <View
                    style={[
                      styles.selectedOverlay,
                      { backgroundColor: colors.primary },
                    ]}
                  >
                    <Text
                      style={[styles.selectedNumber, { color: colors.white }]}
                    >
                      {selectedCards.indexOf(index) + 1}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            { backgroundColor: colors.primary },
            selectedCards.length !== requiredCards && { opacity: 0.5 },
          ]}
          onPress={handleContinue}
          disabled={selectedCards.length !== requiredCards}
        >
          <Text style={[styles.continueButtonText, { color: colors.white }]}>
            {tr.screens.cards.complete}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: spacing.medium,
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
    marginBottom: spacing.small,
  },
  subtitle: {
    fontSize: fontSize.medium,
  },
  content: {
    flex: 1,
    padding: spacing.small / 2,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    paddingHorizontal: 2,
  },
  card: {
    width: "15.5%",
    aspectRatio: 0.6,
    borderRadius: borderRadius.small,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: "#FFA500",
    backgroundColor: "rgba(255, 165, 0, 0.1)",
    shadowColor: "#FFA500",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  footer: {
    padding: spacing.medium,
  },
  continueButton: {
    padding: spacing.medium,
    borderRadius: borderRadius.medium,
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: fontSize.large,
    fontWeight: "bold",
  },
  selectedOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedNumber: {
    fontSize: fontSize.medium,
    fontWeight: "bold",
  },
});
