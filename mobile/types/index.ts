export type SpreadType = 'love' | 'career' | 'general';
export type SpreadLayout = 'three-card' | 'celtic-cross' | 'horseshoe';

export interface TarotCard {
  id: number;
  name: string;
  meaning: string;
  description: string;
  isReversed?: boolean;
  image: any;
}

export interface TarotReading {
  id: string;
  date: string;
  question: string;
  layout: SpreadLayout;
  cards: TarotCard[];
  freeReading: string;
  detailedReading?: string;
}

declare global {
  namespace ReactNavigation {
    interface ParamList {
      '/(app)/index': undefined;
      '/(app)/cards': { 
        question: string;
        layout: SpreadLayout;
        readingId: string;
      };
      '/(app)/reading': { 
        question: string;
        cards: string;
        layout: SpreadLayout;
        readingId: string;
        fromHistory?: string;
      };
      '/(app)/history': undefined;
      '/(app)/settings': undefined;
    }
  }
} 