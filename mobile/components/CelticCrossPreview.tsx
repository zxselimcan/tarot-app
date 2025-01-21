import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { TarotCard } from "../types";
import { spacing, fontSize } from "../constants/theme";
import { useState, useEffect, useRef } from "react";
import CardModal from "./CardModal";
import { TAROT_CARDS } from '../constants/cardData';

interface Props {
  cards: TarotCard[];
  colors: {
    cardBackground: string;
    text: string;
    textSecondary: string;
  };
  fromHistory?: boolean;
}

export default function CelticCrossPreview({ cards, colors, fromHistory = false }: Props) {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [flips] = useState(() => cards.map(() => new Animated.Value(0)));
  const animationComplete = useRef(fromHistory);

  useEffect(() => {
    if (!fromHistory) {
      const animations = cards.map((_, index) => 
        Animated.timing(flips[index], {
          toValue: 1,
          duration: 800,
          delay: index * 500,
          useNativeDriver: true,
        })
      );

      Animated.parallel(animations).start(() => {
        animationComplete.current = true;
      });
    }
  }, []);

  if (!cards || cards.length !== 10) return null;

  const CardPreview = ({ number }: { number: number }) => {
    const card = cards[number - 1];
    const flipAnimation = flips[number - 1];

    const frontAnimatedStyle = {
      transform: [
        {
          rotateY: flipAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['180deg', '360deg'],
          }),
        },
      ],
    };

    const backAnimatedStyle = {
      transform: [
        {
          rotateY: flipAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
          }),
        },
      ],
    };

    const handlePress = () => {
      if (animationComplete.current) {
        setSelectedCard(card);
      }
    };

    return (
      <TouchableOpacity
        style={[styles.previewCard, { backgroundColor: colors.cardBackground }]}
        onPress={handlePress}
      >
        <Animated.View style={[styles.cardFace, backAnimatedStyle]}>
          <Image
            source={TAROT_CARDS['Card Back'].image}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </Animated.View>
        <Animated.View style={[styles.cardFace, styles.cardFront, frontAnimatedStyle]}>
          <Image
            source={card.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={[styles.cardNumber, { color: colors.text }]}>
            {number}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Merkez Grup */}
      <View style={styles.centerGroup}>
        {/* Üst - 5 */}
        <View style={styles.card5Container}>
          <CardPreview number={5} />
        </View>

        {/* Sol - 3 */}
        <View style={styles.card3Container}>
          <CardPreview number={3} />
        </View>

        {/* Merkez Çapraz - 1,2 */}
        <View style={styles.crossContainer}>
          <View style={styles.card1Container}>
            <CardPreview number={1} />
          </View>
          <View style={styles.card2Container}>
            <CardPreview number={2} />
          </View>
        </View>

        {/* Sağ - 4 */}
        <View style={styles.card4Container}>
          <CardPreview number={4} />
        </View>

        {/* Alt - 6 */}
        <View style={styles.card6Container}>
          <CardPreview number={6} />
        </View>
      </View>

      {/* Sağ Dikey Grup (10-9-8-7) */}
      <View style={styles.rightColumnGroup}>
        <CardPreview number={10} />
        <CardPreview number={9} />
        <CardPreview number={8} />
        <CardPreview number={7} />
      </View>

      <CardModal
        visible={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        cardImage={selectedCard?.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 400,
    aspectRatio: 1.2,
    position: "relative",
    padding: spacing.medium,
  },
  centerGroup: {
    position: "absolute",
    left: "10%",
    right: "35%",
    top: "15%",
    bottom: "15%",
  },
  previewCard: {
    width: 40,
    height: 60,
    borderRadius: 4,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
  },
  cardFront: {
    transform: [{ rotateY: '180deg' }],
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardNumber: {
    fontSize: fontSize.small,
    fontWeight: "bold",
    position: "absolute",
    bottom: 2,
    right: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 2,
    borderRadius: 2,
  },
  crossContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    width: 60,
    height: 60,
  },
  card1Container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -20 }, { translateY: -40 }],
  },
  card2Container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }, { rotate: "90deg" }],
  },
  card3Container: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: [{ translateY: -30 }],
  },
  card4Container: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: [{ translateY: -30 }],
  },
  card5Container: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: [{ translateX: -20 }],
  },
  card6Container: {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: [{ translateX: -20 }],
  },
  rightColumnGroup: {
    position: "absolute",
    right: "5%",
    top: "15%",
    bottom: "15%",
    justifyContent: "space-between",
  },
});
