import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { spacing, fontSize, borderRadius } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../contexts/AppContext';
import { TarotReading } from '../../types/index';
import { useState, useCallback, useEffect } from 'react';
import { ROUTES } from '../../constants/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function History() {
  const router = useRouter();
  const { colors, tr } = useApp();
  const [loading, setLoading] = useState(true);
  const [readings, setReadings] = useState<TarotReading[]>([]);

  useEffect(() => {
    loadReadings();
  }, []);

  const loadReadings = async () => {
    try {
      setLoading(true);
      const savedReadings = await AsyncStorage.getItem('tarot_readings');
      setReadings(savedReadings ? JSON.parse(savedReadings) : []);
    } catch (error) {
      console.error('Error loading readings:', error);
      setReadings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = async () => {
    try {
      await AsyncStorage.removeItem('tarot_readings');
      setReadings([]);
      Alert.alert(tr.common.success, 'Geçmiş başarıyla temizlendi.');
    } catch (error) {
      console.error('Error clearing history:', error);
      Alert.alert(tr.common.error, tr.common.errorMessage);
    }
  };

  const handleReadingPress = useCallback((reading: TarotReading) => {
    router.push({
      pathname: ROUTES.READING,
      params: {
        question: reading.question,
        cards: JSON.stringify(reading.cards),
        layout: reading.layout,
        fromHistory: 'true',
        readingId: reading.id,
      },
    });
  }, [router]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: colors.text }]}>{tr.screens.history.title}</Text>
        </View>
        {readings.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearHistory}
          >
            <Text style={[styles.clearButtonText, { color: colors.primary }]}>
              {tr.screens.history.clearHistory}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.content}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : readings.length === 0 ? (
          <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
            {tr.screens.history.empty}
          </Text>
        ) : (
          readings.map((reading, index) => (
            <TouchableOpacity
              key={`${reading.id}-${index}`}
              style={[styles.readingCard, { backgroundColor: colors.cardBackground }]}
              onPress={() => handleReadingPress(reading)}
            >
              <Text style={[styles.readingQuestion, { color: colors.text }]}>
                {reading.question}
              </Text>
              <View style={styles.readingInfo}>
                <Text style={[styles.readingDate, { color: colors.textSecondary }]}>
                  {new Date(reading.date).toLocaleDateString()}
                </Text>
                <Text style={[styles.readingLayout, { color: colors.textSecondary }]}>
                  {tr.layouts[reading.layout as keyof typeof tr.layouts].title}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: spacing.large,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: spacing.small,
    marginRight: spacing.small,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
  },
  clearButton: {
    padding: spacing.small,
  },
  clearButtonText: {
    fontSize: fontSize.medium,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xlarge,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: fontSize.medium,
    padding: spacing.large,
  },
  content: {
    padding: spacing.medium,
  },
  readingCard: {
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    marginBottom: spacing.medium,
  },
  readingQuestion: {
    fontSize: fontSize.medium,
    marginBottom: spacing.small,
  },
  readingDate: {
    fontSize: fontSize.small,
  },
  readingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.small,
  },
  readingLayout: {
    fontSize: fontSize.small,
  },
}); 