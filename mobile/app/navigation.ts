import { SpreadType } from '../types/index';

const ROUTES = {
  HOME: '/',
  CARDS: '/cards',
  READING: '/reading',
  HISTORY: '/history'
} as const;

type AppRoutes = {
  [K in keyof typeof ROUTES]: string;
};

const appRoutes: AppRoutes = {
  HOME: '/(app)/',
  CARDS: '/(app)/cards',
  READING: '/(app)/reading',
  HISTORY: '/(app)/history'
};

export { appRoutes as ROUTES };
export default appRoutes;