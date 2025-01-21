import { TarotCard, TarotReading } from '../types/index';
import { TAROT_CARDS as REAL_TAROT_CARDS } from './cardData';
import { CARD_MAP } from './cardMap';

export const TAROT_CARDS: TarotCard[] = Array.from({ length: 78 }, (_, index) => ({
  id: index + 1,
  name: CARD_MAP[index],
  meaning: REAL_TAROT_CARDS[CARD_MAP[index]].meaning || '',
  description: REAL_TAROT_CARDS[CARD_MAP[index]].meaning || '',
  image: REAL_TAROT_CARDS[CARD_MAP[index]].image
}));

const mockReadings = [
  {
    id: '1',
    date: '2024-01-15T10:30:00Z',
    question: 'Aşk hayatımda beni neler bekliyor?',
    layout: 'three-card',
    cards: TAROT_CARDS.slice(0, 3),
    freeReading: 'Ücretsiz yorum içeriği...',
    detailedReading: 'Detaylı yorum içeriği...'
  },
  {
    id: '2',
    date: '2024-01-14T15:45:00Z',
    question: 'Kariyerimde nasıl ilerlemeliyim?',
    layout: 'three-card',
    cards: TAROT_CARDS.slice(3, 6),
    freeReading: 'Ücretsiz yorum içeriği...',
    detailedReading: 'Detaylı yorum içeriği...'
  }
];

export const MOCK_READINGS = mockReadings as unknown as TarotReading[]; 