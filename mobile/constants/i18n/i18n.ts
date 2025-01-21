import { TranslationType } from '../../types/translations';
import { tr } from './tr';
import { en } from './en';

export const LANGUAGES = ['tr', 'en'] as const;
export type Language = typeof LANGUAGES[number];

export const defaultLanguage: Language = 'tr';

export const getTranslations = (language: Language): TranslationType => {
  switch (language) {
    case 'en':
      return en;
    case 'tr':
    default:
      return tr;
  }
}; 