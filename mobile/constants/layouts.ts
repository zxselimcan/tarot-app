import { SpreadLayout } from '../types';

export interface CardPosition {
  id: number;
  title: string;
  description: string;
  x: number;
  y: number;
}

export const LAYOUT_POSITIONS: Record<SpreadLayout, CardPosition[]> = {
  'three-card': [
    {
      id: 1,
      title: 'Geçmiş',
      description: 'Geçmişteki etkiler ve deneyimler',
      x: 0,
      y: 0
    },
    {
      id: 2,
      title: 'Şimdi',
      description: 'Mevcut durum ve etkiler',
      x: 1,
      y: 0
    },
    {
      id: 3,
      title: 'Gelecek',
      description: 'Potansiyel sonuçlar ve olasılıklar',
      x: 2,
      y: 0
    }
  ],
  'celtic-cross': [
    {
      id: 1,
      title: 'Ana Durum',
      description: 'Sorunun veya durumun özü',
      x: 1,
      y: 1
    },
    {
      id: 2,
      title: 'Etkileyen Enerji',
      description: 'Ana durumu etkileyen güçler',
      x: 1,
      y: 1
    },
    {
      id: 3,
      title: 'Bilinçaltı',
      description: 'Bilinçaltı faktörler ve gizli etkiler',
      x: 1,
      y: 2
    },
    {
      id: 4,
      title: 'Hedefler',
      description: 'Bilinçli hedefler ve umutlar',
      x: 1,
      y: 0
    },
    {
      id: 5,
      title: 'Geçmiş',
      description: 'Yakın geçmişteki olaylar ve etkiler',
      x: 0,
      y: 1
    },
    {
      id: 6,
      title: 'Gelecek',
      description: 'Yakın gelecekteki potansiyel gelişmeler',
      x: 2,
      y: 1
    },
    {
      id: 7,
      title: 'Bakış Açısı',
      description: 'Kişisel bakış açınız ve tutumunuz',
      x: 3,
      y: 0
    },
    {
      id: 8,
      title: 'Çevre',
      description: 'Dış etkiler ve çevrenin etkisi',
      x: 3,
      y: 1
    },
    {
      id: 9,
      title: 'Umutlar ve Korkular',
      description: 'İçsel beklentiler ve endişeler',
      x: 3,
      y: 2
    },
    {
      id: 10,
      title: 'Sonuç',
      description: 'Nihai sonuç ve potansiyel çözüm',
      x: 3,
      y: 3
    }
  ],
  'horseshoe': [
    {
      id: 1,
      title: 'Geçmiş',
      description: 'Geçmişteki olaylar ve etkiler',
      x: 0,
      y: 0
    },
    {
      id: 2,
      title: 'Şu An',
      description: 'Mevcut durum ve koşullar',
      x: 1,
      y: 0
    },
    {
      id: 3,
      title: 'Sorun',
      description: 'Ana sorun veya zorluk',
      x: 2,
      y: 0
    },
    {
      id: 4,
      title: 'Perspektif',
      description: 'Kişisel bakış açınız',
      x: 2,
      y: 1
    },
    {
      id: 5,
      title: 'Çevre',
      description: 'Çevrenin duruma etkisi',
      x: 2,
      y: 2
    },
    {
      id: 6,
      title: 'Umutlar ve Korkular',
      description: 'İçsel beklentiler ve endişeler',
      x: 1,
      y: 2
    },
    {
      id: 7,
      title: 'Sonuç',
      description: 'Gelecekteki olası sonuç',
      x: 0,
      y: 2
    }
  ]
} as const;

export const LAYOUT_INFO: Record<SpreadLayout, {
  title: string;
  description: string;
  cardCount: number;
}> = {
  'celtic-cross': {
    title: 'Kelt Haçı',
    description: 'Detaylı ve kapsamlı bir yorum için 10 kartlık açılım',
    cardCount: 10
  },
  'three-card': {
    title: 'Üç Kart',
    description: 'Geçmiş, şimdi ve geleceği gösteren 3 kartlık açılım',
    cardCount: 3
  },
  'horseshoe': {
    title: 'At Nalı',
    description: 'Durumun farklı yönlerini gösteren 7 kartlık açılım',
    cardCount: 7
  }
} as const;

export const SPREAD_LAYOUTS: SpreadLayout[] = ['celtic-cross', 'three-card', 'horseshoe'];

export const getLayoutCardCount = (layout: SpreadLayout): number => {
  return LAYOUT_POSITIONS[layout].length;
}; 