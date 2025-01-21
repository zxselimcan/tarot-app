import { tr } from './i18n/tr';

interface CardData {
  image: any;
  meaning?: string;
}

export const TAROT_CARDS: Record<string, CardData> = {
  'Card Back': {
    image: require('../assets/images/cards/card-back.jpg'),
  },
  // Major Arcana
  'The Fool': {
    image: require('../assets/images/cards/fool.jpg'),
  },
  'The Magician': {
    image: require('../assets/images/cards/magician.jpg'),
  },
  'The High Priestess': {
    image: require('../assets/images/cards/high-priestess.jpg'),
  },
  'The Empress': {
    image: require('../assets/images/cards/empress.jpg'),
  },
  'The Emperor': {
    image: require('../assets/images/cards/emperor.jpg'),
  },
  'The Hierophant': {
    image: require('../assets/images/cards/hierophant.jpg'),
  },
  'The Lovers': {
    image: require('../assets/images/cards/lovers.jpg'),
  },
  'The Chariot': {
    image: require('../assets/images/cards/chariot.jpg'),
  },
  'Strength': {
    image: require('../assets/images/cards/strength.jpg'),
  },
  'The Hermit': {
    image: require('../assets/images/cards/hermit.jpg'),
  },
  'Wheel of Fortune': {
    image: require('../assets/images/cards/wheel-of-fortune.jpg'),
  },
  'Justice': {
    image: require('../assets/images/cards/justice.jpg'),
  },
  'The Hanged Man': {
    image: require('../assets/images/cards/hanged-man.jpg'),
  },
  'Death': {
    image: require('../assets/images/cards/death.jpg'),
  },
  'Temperance': {
    image: require('../assets/images/cards/temperance.jpg'),
  },
  'The Devil': {
    image: require('../assets/images/cards/devil.jpg'),
  },
  'The Tower': {
    image: require('../assets/images/cards/tower.jpg'),
  },
  'The Star': {
    image: require('../assets/images/cards/star.jpg'),
  },
  'The Moon': {
    image: require('../assets/images/cards/moon.jpg'),
  },
  'The Sun': {
    image: require('../assets/images/cards/sun.jpg'),
  },
  'Judgement': {
    image: require('../assets/images/cards/judgment.jpg'),
  },
  'The World': {
    image: require('../assets/images/cards/world.jpg'),
  },

  // Wands
  'Ace of Wands': {
    image: require('../assets/images/cards/wand-ace.jpg'),
  },
  'Two of Wands': {
    image: require('../assets/images/cards/wand-two.jpg'),
  },
  'Three of Wands': {
    image: require('../assets/images/cards/wand-three.jpg'),
  },
  'Four of Wands': {
    image: require('../assets/images/cards/wand-four.jpg'),
  },
  'Five of Wands': {
    image: require('../assets/images/cards/wand-five.jpg'),
  },
  'Six of Wands': {
    image: require('../assets/images/cards/wand-six.jpg'),
  },
  'Seven of Wands': {
    image: require('../assets/images/cards/wand-seven.jpg'),
  },
  'Eight of Wands': {
    image: require('../assets/images/cards/wand-eight.jpg'),
  },
  'Nine of Wands': {
    image: require('../assets/images/cards/wand-nine.jpg'),
  },
  'Ten of Wands': {
    image: require('../assets/images/cards/wand-ten.jpg'),
  },
  'Page of Wands': {
    image: require('../assets/images/cards/wand-prince.jpg'),
  },
  'Knight of Wands': {
    image: require('../assets/images/cards/wand-knight.jpg'),
  },
  'Queen of Wands': {
    image: require('../assets/images/cards/wand-queen.jpg'),
  },
  'King of Wands': {
    image: require('../assets/images/cards/wand-king.jpg'),
  },

  // Cups
  'Ace of Cups': {
    image: require('../assets/images/cards/cup-ace.jpg'),
  },
  'Two of Cups': {
    image: require('../assets/images/cards/cup-two.jpg'),
  },
  'Three of Cups': {
    image: require('../assets/images/cards/cup-three.jpg'),
  },
  'Four of Cups': {
    image: require('../assets/images/cards/cup-four.jpg'),
  },
  'Five of Cups': {
    image: require('../assets/images/cards/cup-five.jpg'),
  },
  'Six of Cups': {
    image: require('../assets/images/cards/cup-six.jpg'),
  },
  'Seven of Cups': {
    image: require('../assets/images/cards/cup-seven.jpg'),
  },
  'Eight of Cups': {
    image: require('../assets/images/cards/cup-eight.jpg'),
  },
  'Nine of Cups': {
    image: require('../assets/images/cards/cup-nine.jpg'),
  },
  'Ten of Cups': {
    image: require('../assets/images/cards/cup-ten.jpg'),
  },
  'Page of Cups': {
    image: require('../assets/images/cards/cup-prince.jpg'),
  },
  'Knight of Cups': {
    image: require('../assets/images/cards/cup-knight.jpg'),
  },
  'Queen of Cups': {
    image: require('../assets/images/cards/cup-queen.jpg'),
  },
  'King of Cups': {
    image: require('../assets/images/cards/cup-king.jpg'),
  },

  // Swords
  'Ace of Swords': {
    image: require('../assets/images/cards/sword-ace.jpg'),
  },
  'Two of Swords': {
    image: require('../assets/images/cards/sword-two.jpg'),
  },
  'Three of Swords': {
    image: require('../assets/images/cards/sword-three.jpg'),
  },
  'Four of Swords': {
    image: require('../assets/images/cards/sword-four.jpg'),
  },
  'Five of Swords': {
    image: require('../assets/images/cards/sword-five.jpg'),
  },
  'Six of Swords': {
    image: require('../assets/images/cards/sword-six.jpg'),
  },
  'Seven of Swords': {
    image: require('../assets/images/cards/sword-seven.jpg'),
  },
  'Eight of Swords': {
    image: require('../assets/images/cards/sword-eight.jpg'),
  },
  'Nine of Swords': {
    image: require('../assets/images/cards/sword-nine.jpg'),
  },
  'Ten of Swords': {
    image: require('../assets/images/cards/sword-ten.jpg'),
  },
  'Page of Swords': {
    image: require('../assets/images/cards/sword-prince.jpg'),
  },
  'Knight of Swords': {
    image: require('../assets/images/cards/sword-knight.jpg'),
  },
  'Queen of Swords': {
    image: require('../assets/images/cards/sword-queen.jpg'),
  },
  'King of Swords': {
    image: require('../assets/images/cards/sword-king.jpg'),
  },

  // Pentacles
  'Ace of Pentacles': {
    image: require('../assets/images/cards/pentacle-ace.jpg'),
  },
  'Two of Pentacles': {
    image: require('../assets/images/cards/pentacle-two.jpg'),
  },
  'Three of Pentacles': {
    image: require('../assets/images/cards/pentacle-three.jpg'),
  },
  'Four of Pentacles': {
    image: require('../assets/images/cards/pentacle-four.jpg'),
  },
  'Five of Pentacles': {
    image: require('../assets/images/cards/pentacle-five.jpg'),
  },
  'Six of Pentacles': {
    image: require('../assets/images/cards/pentacle-six.jpg'),
  },
  'Seven of Pentacles': {
    image: require('../assets/images/cards/pentacle-seven.jpg'),
  },
  'Eight of Pentacles': {
    image: require('../assets/images/cards/pentacle-eight.jpg'),
  },
  'Nine of Pentacles': {
    image: require('../assets/images/cards/pentacle-nine.jpg'),
  },
  'Ten of Pentacles': {
    image: require('../assets/images/cards/pentacle-ten.jpg'),
  },
  'Page of Pentacles': {
    image: require('../assets/images/cards/pentacle-prince.jpg'),
  },
  'Knight of Pentacles': {
    image: require('../assets/images/cards/pentacle-knight.jpg'),
  },
  'Queen of Pentacles': {
    image: require('../assets/images/cards/pentacle-queen.jpg'),
  },
  'King of Pentacles': {
    image: require('../assets/images/cards/pentacle-king.jpg'),
  },
} as const; 