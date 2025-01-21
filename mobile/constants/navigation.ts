export type AppRoutes = {
  HOME: string;
  CARDS: string;
  READING: string;
  HISTORY: string;
  SETTINGS: string;
};

export const ROUTES: AppRoutes = {
  HOME: '/(app)/',
  CARDS: '/(app)/cards',
  READING: '/(app)/reading',
  HISTORY: '/(app)/history',
  SETTINGS: '/(app)/settings',
} as const;

export default ROUTES; 