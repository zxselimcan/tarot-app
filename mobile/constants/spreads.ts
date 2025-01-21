import { SpreadType, SpreadLayout } from '../types/index';

export const spreadLayouts: SpreadLayout[] = [
  {
    id: 'three-card',
    name: 'Üç Kart Açılımı',
    description: 'Geçmiş, şimdi ve geleceği gösteren basit ve etkili bir açılım.',
    cardCount: 3,
    positions: [
      {
        name: 'Geçmiş',
        description: 'Geçmişteki etkiler ve deneyimler'
      },
      {
        name: 'Şimdi',
        description: 'Mevcut durum ve etkiler'
      },
      {
        name: 'Gelecek',
        description: 'Potansiyel gelişmeler ve sonuçlar'
      }
    ]
  },
  {
    id: 'celtic-cross',
    name: 'Kelt Haçı',
    description: 'Durumun derinlemesine analizi için kapsamlı bir açılım.',
    cardCount: 10,
    positions: [
      {
        name: 'Merkez',
        description: 'Ana durum veya soru'
      },
      {
        name: 'Etkileyen Enerji',
        description: 'Durumu çaprazlayan enerji'
      },
      {
        name: 'Bilinçaltı',
        description: 'Altta yatan faktörler'
      },
      {
        name: 'Geçmiş',
        description: 'Yakın geçmişteki etkiler'
      },
      {
        name: 'Bilinçli Hedefler',
        description: 'Umutlar ve beklentiler'
      },
      {
        name: 'Gelecek',
        description: 'Yakın gelecekteki olasılıklar'
      },
      {
        name: 'Kişisel Bakış',
        description: 'Kendi bakış açınız'
      },
      {
        name: 'Çevre',
        description: 'Dış etkiler ve çevre faktörleri'
      },
      {
        name: 'Umutlar/Korkular',
        description: 'İç dünyada yaşanan duygular'
      },
      {
        name: 'Sonuç',
        description: 'Nihai sonuç'
      }
    ]
  },
  {
    id: 'horseshoe',
    name: 'Yedi Kart At Nalı',
    description: 'Bir durumun gelişimini gösteren detaylı bir açılım.',
    cardCount: 7,
    positions: [
      {
        name: 'Geçmiş',
        description: 'Geçmişteki etkiler'
      },
      {
        name: 'Şimdiki Durum',
        description: 'Mevcut durum'
      },
      {
        name: 'Gizli Etkiler',
        description: 'Bilinmeyen faktörler'
      },
      {
        name: 'Engeller',
        description: 'Karşılaşılan zorluklar'
      },
      {
        name: 'Çevre',
        description: 'Dış etkiler'
      },
      {
        name: 'İç Dünya',
        description: 'İç dünyada yaşananlar'
      },
      {
        name: 'Sonuç',
        description: 'Beklenen sonuç'
      }
    ]
  },
  {
    id: 'five-card',
    name: 'Beş Kart Açılımı',
    description: 'Durumun farklı yönlerini gösteren dengeli bir açılım.',
    cardCount: 5,
    positions: [
      {
        name: 'Merkez',
        description: 'Durumun özü'
      },
      {
        name: 'Üst',
        description: 'Olumlu etkiler'
      },
      {
        name: 'Alt',
        description: 'Zorluklar'
      },
      {
        name: 'Sol',
        description: 'Geçmiş etkiler'
      },
      {
        name: 'Sağ',
        description: 'Gelecek potansiyeli'
      }
    ]
  },
  {
    id: 'pyramid',
    name: 'Piramit Açılımı',
    description: 'Kararların ve sonuçların analizi için piramit şeklinde bir açılım.',
    cardCount: 6,
    positions: [
      {
        name: 'Tepe',
        description: 'Durumun özeti'
      },
      {
        name: 'Orta Sol',
        description: 'Olumlu etkiler'
      },
      {
        name: 'Orta Sağ',
        description: 'Zorluklar'
      },
      {
        name: 'Alt Sol',
        description: 'İlk potansiyel sonuç'
      },
      {
        name: 'Alt Orta',
        description: 'İkinci potansiyel sonuç'
      },
      {
        name: 'Alt Sağ',
        description: 'Üçüncü potansiyel sonuç'
      }
    ]
  }
]; 