export const SPREAD_LAYOUTS = ['celtic-cross', 'three-card', 'horseshoe'] as const;
export type SpreadLayout = typeof SPREAD_LAYOUTS[number];

export interface CardPosition {
  id: number;
  title: string;
  description: string;
  x: number;
  y: number;
} 