import { TranslationType } from '../../types/translations';

export const en: TranslationType = {
  appName: 'Tarot',
  appSubtitle: 'Your cards are waiting for you',
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    errorMessage: 'An error occurred. Please try again.',
    back: 'Back',
    cards: 'cards'
  },
  cards: {
    meanings: {
      'The Fool': 'New beginnings, innocence, free spirit, spontaneity',
      'The Magician': 'Creativity, skill, willpower, mastery',
      'The High Priestess': 'Intuition, mystery, inner wisdom, spiritual awareness',
      'The Empress': 'Fertility, motherhood, nature, abundance',
      'The Emperor': 'Authority, structure, control, leadership',
      'The Hierophant': 'Tradition, learning, guidance, belief',
      'The Lovers': 'Love, harmony, relationships, value choices',
      'The Chariot': 'Willpower, determination, success, control',
      'Strength': 'Power, courage, patience, inner control',
      'The Hermit': 'Introspection, seeking, solitude, guidance',
      'Wheel of Fortune': 'Change, luck, destiny, turning points',
      'Justice': 'Justice, balance, truth, honesty',
      'The Hanged Man': 'Sacrifice, waiting, surrender, new perspective',
      'Death': 'Endings, change, transformation, renewal',
      'Temperance': 'Balance, harmony, moderation, patience',
      'The Devil': 'Addiction, materialism, passion, restriction',
      'The Tower': 'Sudden change, destruction, enlightenment, liberation',
      'The Star': 'Hope, inspiration, guidance, renewal',
      'The Moon': 'Illusion, intuition, subconscious, fear',
      'The Sun': 'Happiness, success, vitality, enlightenment',
      'Judgement': 'Rebirth, inner calling, forgiveness',
      'The World': 'Completion, wholeness, success, journey',
      // Wands
      'Ace of Wands': 'New beginnings, inspiration, creative energy',
      'Two of Wands': 'Planning, decisions, future vision',
      'Three of Wands': 'Progress, expansion, opportunities',
      'Four of Wands': 'Celebration, home, harmony, success',
      'Five of Wands': 'Competition, conflict, struggle',
      'Six of Wands': 'Victory, success, recognition',
      'Seven of Wands': 'Defense, perseverance, challenge',
      'Eight of Wands': 'Swift action, progress, communication',
      'Nine of Wands': 'Resilience, persistence, last obstacles',
      'Ten of Wands': 'Burden, responsibility, pressure',
      'Page of Wands': 'Exploration, adventure, new ideas',
      'Knight of Wands': 'Energy, passion, adventure',
      'Queen of Wands': 'Confidence, charm, vitality',
      'King of Wands': 'Leadership, vision, charisma',
      // Cups
      'Ace of Cups': 'New emotions, love, intuition',
      'Two of Cups': 'Partnership, harmony, attraction',
      'Three of Cups': 'Celebration, friendship, happiness',
      'Four of Cups': 'Dissatisfaction, introspection, evaluation',
      'Five of Cups': 'Loss, grief, regret',
      'Six of Cups': 'Nostalgia, innocence, past',
      'Seven of Cups': 'Choices, imagination, illusion',
      'Eight of Cups': 'Departure, moving on, seeking',
      'Nine of Cups': 'Contentment, satisfaction, wishes',
      'Ten of Cups': 'Happiness, family, harmony',
      'Page of Cups': 'Creativity, emotion, message',
      'Knight of Cups': 'Romance, charm, adventure',
      'Queen of Cups': 'Compassion, empathy, emotional support',
      'King of Cups': 'Emotional maturity, balance, wisdom',
      // Swords
      'Ace of Swords': 'Clarity, truth, victory',
      'Two of Swords': 'Decision, balance, stalemate',
      'Three of Swords': 'Heartbreak, pain, sorrow',
      'Four of Swords': 'Rest, recovery, contemplation',
      'Five of Swords': 'Conflict, defeat, loss',
      'Six of Swords': 'Transition, change, healing',
      'Seven of Swords': 'Deception, escape, strategy',
      'Eight of Swords': 'Restriction, obstacles, mental blocks',
      'Nine of Swords': 'Anxiety, fear, nightmares',
      'Ten of Swords': 'Endings, destruction, new beginnings',
      'Page of Swords': 'Curiosity, intellect, communication',
      'Knight of Swords': 'Speed, determination, direct action',
      'Queen of Swords': 'Independence, clarity, honesty',
      'King of Swords': 'Authority, logic, justice',
      // Pentacles
      'Ace of Pentacles': 'Opportunity, prosperity, new beginnings',
      'Two of Pentacles': 'Balance, flexibility, change',
      'Three of Pentacles': 'Collaboration, mastery, growth',
      'Four of Pentacles': 'Security, conservation, control',
      'Five of Pentacles': 'Hardship, loss, exclusion',
      'Six of Pentacles': 'Generosity, help, sharing',
      'Seven of Pentacles': 'Assessment, patience, investment',
      'Eight of Pentacles': 'Learning, mastery, detail',
      'Nine of Pentacles': 'Abundance, luxury, self-reliance',
      'Ten of Pentacles': 'Wealth, inheritance, family',
      'Page of Pentacles': 'Learning, practical, reliable',
      'Knight of Pentacles': 'Hard work, responsibility, routine',
      'Queen of Pentacles': 'Abundance, practicality, nurturing',
      'King of Pentacles': 'Wealth, business, practicality'
    }
  },
  layouts: {
    'celtic-cross': {
      title: 'Celtic Cross',
      description: 'The most comprehensive tarot spread that analyzes your past, present, and future in detail',
      cardCount: 10
    },
    'three-card': {
      title: 'Three Card',
      description: 'A simple and effective spread representing your past, present, and future',
      cardCount: 3
    },
    'horseshoe': {
      title: 'Horseshoe',
      description: 'A classic seven-card spread offering a general perspective',
      cardCount: 7
    }
  },
  screens: {
    home: {
      title: 'Tarot Reading',
      subtitle: 'Discover what the cards have to say',
      enterQuestion: 'Enter Your Question',
      questionPlaceholder: 'Write the question you want to ask the cards...',
      selectLayout: 'Select Layout',
      start: 'Start',
      questionLengthError: 'Please enter a question with at least 3 characters'
    },
    cards: {
      title: 'Select Your Cards',
      selectedCount: 'Selected: {{count}}/{{total}}',
      complete: 'Complete Reading',
      selectCards: 'Select Your Cards',
      maxCardsSelected: 'You have reached the maximum number of cards for this layout',
      alreadySelected: 'You have already selected this card',
      selectAllCards: 'Please select all cards'
    },
    reading: {
      title: 'Your Tarot Reading',
      freePreview: 'Free Preview',
      detailedReading: 'Detailed Reading',
      purchaseReading: 'Purchase Detailed Reading',
      newReading: 'New Reading',
      viewHistory: 'View History',
      getReading: 'Show Reading'
    },
    history: {
      title: 'Reading History',
      empty: 'You have not done any readings yet',
      noReadings: 'You have no readings yet.',
      clearHistory: 'Clear History'
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      theme: 'Theme',
      darkMode: 'Dark Mode',
      about: 'About App',
      version: 'Version',
      languages: {
        turkish: 'Türkçe',
        english: 'English'
      },
      notifications: 'Notifications'
    }
  }
}; 