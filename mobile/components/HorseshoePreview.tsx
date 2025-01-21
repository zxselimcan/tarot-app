import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from "react-native";
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

export default function HorseshoePreview({ cards, colors, fromHistory = false }: Props) {
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

  if (!cards || cards.length !== 7) return null;

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - spacing.medium * 4) / 7;
  const cardHeight = cardWidth * 1.4;

  const getMarginTop = (index: number) => {
    if (index === 3) return 30;
    if (index < 3) return 120 - (index * 30);
    return 120 - ((6-index) * 30);
  };

  const handleCardPress = (card: TarotCard) => {
    if (animationComplete.current) {
      setSelectedCard(card);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.horseshoe}>
        {cards.map((card, index) => {
          const flipAnimation = flips[index];

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

          return (
            <TouchableOpacity 
              key={index}
              onPress={() => handleCardPress(card)}
              style={[
                styles.cardContainer,
                {
                  width: cardWidth,
                  height: cardHeight,
                  marginTop: getMarginTop(index),
                  backgroundColor: colors.cardBackground
                }
              ]}
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
                  {index + 1}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
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
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    aspectRatio: 1.5,
    padding: spacing.small,
  },
  horseshoe: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  cardContainer: {
    borderRadius: 8,
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
  }
}); 