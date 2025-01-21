export interface TranslationType {
  appName: string;
  appSubtitle: string;
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    errorMessage: string;
    back: string;
    cards: string;
  };
  cards: {
    meanings: {
      'The Fool': string;
      'The Magician': string;
      'The High Priestess': string;
      'The Empress': string;
      'The Emperor': string;
      'The Hierophant': string;
      'The Lovers': string;
      'The Chariot': string;
      'Strength': string;
      'The Hermit': string;
      'Wheel of Fortune': string;
      'Justice': string;
      'The Hanged Man': string;
      'Death': string;
      'Temperance': string;
      'The Devil': string;
      'The Tower': string;
      'The Star': string;
      'The Moon': string;
      'The Sun': string;
      'Judgement': string;
      'The World': string;
      // Wands
      'Ace of Wands': string;
      'Two of Wands': string;
      'Three of Wands': string;
      'Four of Wands': string;
      'Five of Wands': string;
      'Six of Wands': string;
      'Seven of Wands': string;
      'Eight of Wands': string;
      'Nine of Wands': string;
      'Ten of Wands': string;
      'Page of Wands': string;
      'Knight of Wands': string;
      'Queen of Wands': string;
      'King of Wands': string;
      // Cups
      'Ace of Cups': string;
      'Two of Cups': string;
      'Three of Cups': string;
      'Four of Cups': string;
      'Five of Cups': string;
      'Six of Cups': string;
      'Seven of Cups': string;
      'Eight of Cups': string;
      'Nine of Cups': string;
      'Ten of Cups': string;
      'Page of Cups': string;
      'Knight of Cups': string;
      'Queen of Cups': string;
      'King of Cups': string;
      // Swords
      'Ace of Swords': string;
      'Two of Swords': string;
      'Three of Swords': string;
      'Four of Swords': string;
      'Five of Swords': string;
      'Six of Swords': string;
      'Seven of Swords': string;
      'Eight of Swords': string;
      'Nine of Swords': string;
      'Ten of Swords': string;
      'Page of Swords': string;
      'Knight of Swords': string;
      'Queen of Swords': string;
      'King of Swords': string;
      // Pentacles
      'Ace of Pentacles': string;
      'Two of Pentacles': string;
      'Three of Pentacles': string;
      'Four of Pentacles': string;
      'Five of Pentacles': string;
      'Six of Pentacles': string;
      'Seven of Pentacles': string;
      'Eight of Pentacles': string;
      'Nine of Pentacles': string;
      'Ten of Pentacles': string;
      'Page of Pentacles': string;
      'Knight of Pentacles': string;
      'Queen of Pentacles': string;
      'King of Pentacles': string;
    };
  };
  layouts: {
    'celtic-cross': {
      title: string;
      description: string;
      cardCount: number;
    };
    'three-card': {
      title: string;
      description: string;
      cardCount: number;
    };
    'horseshoe': {
      title: string;
      description: string;
      cardCount: number;
    };
  };
  screens: {
    home: {
      title: string;
      subtitle: string;
      enterQuestion: string;
      questionPlaceholder: string;
      selectLayout: string;
      start: string;
      questionLengthError: string;
    };
    cards: {
      title: string;
      selectedCount: string;
      complete: string;
      selectCards: string;
      maxCardsSelected: string;
      alreadySelected: string;
      selectAllCards: string;
    };
    reading: {
      title: string;
      freePreview: string;
      detailedReading: string;
      purchaseReading: string;
      newReading: string;
      viewHistory: string;
      getReading: string;
    };
    history: {
      title: string;
      empty: string;
      noReadings: string;
      clearHistory: string;
    };
    settings: {
      title: string;
      language: string;
      theme: string;
      darkMode: string;
      about: string;
      version: string;
      languages: {
        turkish: string;
        english: string;
      };
      notifications: string;
    };
  };
} 