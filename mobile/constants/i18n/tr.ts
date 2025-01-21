import { TranslationType } from '../../types/translations';

export const tr: TranslationType = {
  appName: 'Tarot',
  appSubtitle: 'Kartlarınız sizi bekliyor',
  common: {
    loading: 'Yükleniyor...',
    error: 'Hata',
    success: 'Başarılı',
    cancel: 'İptal',
    confirm: 'Onayla',
    errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',
    back: 'Geri',
    cards: 'kart'
  },
  cards: {
    meanings: {
      'The Fool': 'Yeni başlangıçlar, saflık, özgür ruh, spontanlık',
      'The Magician': 'Yaratıcılık, beceri, irade gücü, ustalık',
      'The High Priestess': 'Sezgi, gizem, içsel bilgelik, ruhsal farkındalık',
      'The Empress': 'Bereket, annelik, doğa, bolluk',
      'The Emperor': 'Otorite, yapı, kontrol, liderlik',
      'The Hierophant': 'Gelenek, öğrenme, rehberlik, inanç',
      'The Lovers': 'Aşk, uyum, ilişkiler, değer seçimleri',
      'The Chariot': 'İrade gücü, kararlılık, başarı, kontrol',
      'Strength': 'Güç, cesaret, sabır, içsel kontrol',
      'The Hermit': 'İçe dönüş, arayış, yalnızlık, rehberlik',
      'Wheel of Fortune': 'Değişim, şans, kader, dönüm noktaları',
      'Justice': 'Adalet, denge, doğruluk, dürüstlük',
      'The Hanged Man': 'Fedakarlık, bekleyiş, teslim olma, yeni bakış açısı',
      'Death': 'Son, değişim, dönüşüm, yenilenme',
      'Temperance': 'Denge, uyum, ılımlılık, sabır',
      'The Devil': 'Bağımlılık, maddecilik, tutku, kısıtlanma',
      'The Tower': 'Ani değişim, yıkım, aydınlanma, özgürleşme',
      'The Star': 'Umut, ilham, rehberlik, yenilenme',
      'The Moon': 'Yanılsama, sezgiler, bilinçaltı, korku',
      'The Sun': 'Mutluluk, başarı, canlılık, aydınlanma',
      'Judgement': 'Yeniden doğuş, iç hesaplaşma, affetme',
      'The World': 'Tamamlanma, bütünlük, başarı, yolculuk',
      // Wands
      'Ace of Wands': 'Yeni başlangıçlar, ilham, yaratıcı enerji',
      'Two of Wands': 'Planlama, karar verme, gelecek vizyonu',
      'Three of Wands': 'İlerleme, genişleme, fırsatlar',
      'Four of Wands': 'Kutlama, ev, uyum, başarı',
      'Five of Wands': 'Rekabet, çatışma, mücadele',
      'Six of Wands': 'Zafer, başarı, tanınma',
      'Seven of Wands': 'Savunma, azim, mücadele',
      'Eight of Wands': 'Hızlı hareket, ilerleme, iletişim',
      'Nine of Wands': 'Dayanıklılık, sebat, son engeller',
      'Ten of Wands': 'Yük, sorumluluk, baskı',
      'Page of Wands': 'Keşif, macera, yeni fikirler',
      'Knight of Wands': 'Enerji, tutku, macera',
      'Queen of Wands': 'Özgüven, çekicilik, canlılık',
      'King of Wands': 'Liderlik, vizyon, karizma',
      // Cups
      'Ace of Cups': 'Yeni duygular, sevgi, sezgi',
      'Two of Cups': 'Ortaklık, uyum, çekim',
      'Three of Cups': 'Kutlama, dostluk, mutluluk',
      'Four of Cups': 'Memnuniyetsizlik, içe dönüş, değerlendirme',
      'Five of Cups': 'Kayıp, üzüntü, pişmanlık',
      'Six of Cups': 'Nostalji, masumiyet, geçmiş',
      'Seven of Cups': 'Seçenekler, hayal gücü, yanılsama',
      'Eight of Cups': 'Ayrılık, ilerleme, arayış',
      'Nine of Cups': 'Memnuniyet, tatmin, dilek',
      'Ten of Cups': 'Mutluluk, aile, uyum',
      'Page of Cups': 'Yaratıcılık, duygu, mesaj',
      'Knight of Cups': 'Romantizm, cazibe, macera',
      'Queen of Cups': 'Şefkat, empati, duygusal destek',
      'King of Cups': 'Duygusal olgunluk, denge, bilgelik',
      // Swords
      'Ace of Swords': 'Netlik, gerçek, zafer',
      'Two of Swords': 'Karar, denge, çıkmaz',
      'Three of Swords': 'Kalp kırıklığı, acı, üzüntü',
      'Four of Swords': 'Dinlenme, iyileşme, düşünme',
      'Five of Swords': 'Çatışma, yenilgi, kayıp',
      'Six of Swords': 'Geçiş, değişim, iyileşme',
      'Seven of Swords': 'Hile, kaçış, strateji',
      'Eight of Swords': 'Kısıtlama, engeller, zihinsel blokaj',
      'Nine of Swords': 'Endişe, korku, kabus',
      'Ten of Swords': 'Son, yıkım, yeniden başlangıç',
      'Page of Swords': 'Merak, zeka, iletişim',
      'Knight of Swords': 'Hız, kararlılık, doğrudan eylem',
      'Queen of Swords': 'Bağımsızlık, netlik, dürüstlük',
      'King of Swords': 'Otorite, mantık, adalet',
      // Pentacles
      'Ace of Pentacles': 'Fırsat, refah, yeni başlangıçlar',
      'Two of Pentacles': 'Denge, esneklik, değişim',
      'Three of Pentacles': 'İşbirliği, ustalık, büyüme',
      'Four of Pentacles': 'Güvenlik, koruma, kontrol',
      'Five of Pentacles': 'Zorluk, kayıp, dışlanma',
      'Six of Pentacles': 'Cömertlik, yardım, paylaşım',
      'Seven of Pentacles': 'Değerlendirme, sabır, yatırım',
      'Eight of Pentacles': 'Öğrenme, ustalık, detay',
      'Nine of Pentacles': 'Bolluk, lüks, kendine güven',
      'Ten of Pentacles': 'Zenginlik, miras, aile',
      'Page of Pentacles': 'Öğrenme, pratik, güvenilirlik',
      'Knight of Pentacles': 'Çalışkanlık, sorumluluk, rutin',
      'Queen of Pentacles': 'Bolluk, pratiklik, besleyicilik',
      'King of Pentacles': 'Zenginlik, iş, pratiklik'
    }
  },
  layouts: {
    'celtic-cross': {
      title: 'Kelt Haçı',
      description: 'Geçmiş, şimdi ve geleceğinizi detaylı bir şekilde analiz eden, en kapsamlı tarot dizilimi',
      cardCount: 10
    },
    'three-card': {
      title: 'Üç Kart',
      description: 'Geçmiş, şimdi ve geleceğinizi temsil eden basit ve etkili bir dizilim',
      cardCount: 3
    },
    'horseshoe': {
      title: 'At Nalı',
      description: 'Yedi kartlık, genel bir bakış açısı sunan klasik bir dizilim',
      cardCount: 7
    }
  },
  screens: {
    home: {
      title: 'Tarot Falı',
      subtitle: 'Kartların size ne söylediğini öğrenin',
      enterQuestion: 'Sorunuzu Girin',
      questionPlaceholder: 'Kartlara sormak istediğiniz soruyu yazın...',
      selectLayout: 'Dizilim Seçin',
      start: 'Başla',
      questionLengthError: 'Lütfen en az 3 karakter uzunluğunda bir soru girin'
    },
    cards: {
      title: 'Kartlarınızı Seçin',
      selectedCount: 'Seçilen: {{count}}/{{total}}',
      complete: 'Açılımı Tamamla',
      selectCards: 'Kartlarınızı Seçin',
      maxCardsSelected: 'Bu dizilim için maksimum kart sayısına ulaştınız',
      alreadySelected: 'Bu kartı zaten seçtiniz',
      selectAllCards: 'Lütfen tüm kartları seçin'
    },
    reading: {
      title: 'Tarot Açılımınız',
      freePreview: 'Ücretsiz Yorum',
      detailedReading: 'Detaylı Yorum',
      purchaseReading: 'Detaylı Yorum Satın Al',
      newReading: 'Yeni Açılım',
      viewHistory: 'Geçmiş Açılımlar',
      getReading: 'Yorumu Göster'
    },
    history: {
      title: 'Geçmiş Açılımlar',
      empty: 'Henüz hiç açılım yapmadınız',
      noReadings: 'Henüz hiç açılım yapmadınız.',
      clearHistory: 'Geçmişi Temizle'
    },
    settings: {
      title: 'Ayarlar',
      language: 'Dil',
      theme: 'Tema',
      darkMode: 'Karanlık Mod',
      about: 'Uygulama Hakkında',
      version: 'Versiyon',
      languages: {
        turkish: 'Türkçe',
        english: 'English'
      },
      notifications: 'Bildirimler'
    }
  }
}; 