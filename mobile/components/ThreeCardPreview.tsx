import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { TarotCard } from '../types';
import { spacing, fontSize } from '../constants/theme';
import { useState, useEffect, useRef } from 'react';
import CardModal from './CardModal';
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

export default function ThreeCardPreview({ cards, colors, fromHistory = false }: Props) {
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

  if (!cards || cards.length !== 3) return null;

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
          <Text style={[styles.cardNumber, { color: colors.text }]}>{number}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsRow}>
        <CardPreview number={1} />
        <CardPreview number={2} />
        <CardPreview number={3} />
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
    width: '100%',
    aspectRatio: 2,
    padding: spacing.medium,
    justifyContent: 'center',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  previewCard: {
    width: 80,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
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
    width: '100%',
    height: '100%',
  },
  cardNumber: {
    fontSize: fontSize.small,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 2,
    borderRadius: 2,
  },
}); 