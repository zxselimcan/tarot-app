import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { spacing, fontSize, borderRadius } from '../../constants/theme';
import { ROUTES } from '../../constants/navigation';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../contexts/AppContext';
import { useState } from 'react';
import { SpreadLayout } from '../../types';
import { SPREAD_LAYOUTS } from '../../constants/layouts';
import LayoutSelectionModal from '../../components/LayoutSelectionModal';

export default function Home() {
  const router = useRouter();
  const { colors, tr } = useApp();
  const [question, setQuestion] = useState('');
  const [selectedLayout, setSelectedLayout] = useState<SpreadLayout>('three-card');
  const [isLayoutModalVisible, setLayoutModalVisible] = useState(false);

  const handleStart = () => {
    if (question.trim().length < 3) {
      Alert.alert(tr.common.error, tr.screens.home.questionLengthError);
      return;
    }

    const readingId = Date.now().toString();

    console.log('Navigating to cards with:', {
      question: question.trim(),
      layout: selectedLayout,
      readingId
    });

    router.push({
      pathname: ROUTES.CARDS,
      params: {
        question: question.trim(),
        layout: selectedLayout,
        readingId
      }
    });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: colors.text }]}>{tr.screens.home.title}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {tr.screens.home.subtitle}
          </Text>
        </View>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push(ROUTES.SETTINGS)}
          >
            <Ionicons name="settings-outline" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push(ROUTES.HISTORY)}
          >
            <Ionicons name="time-outline" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {tr.screens.home.enterQuestion}
        </Text>

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.cardBackground,
              color: colors.text,
              borderColor: colors.border
            }
          ]}
          placeholder={tr.screens.home.questionPlaceholder}
          placeholderTextColor={colors.textSecondary}
          value={question}
          onChangeText={setQuestion}
          multiline
        />

        <TouchableOpacity
          style={[styles.selectedLayout, { backgroundColor: colors.cardBackground }]}
          onPress={() => setLayoutModalVisible(true)}
        >
          <View>
            <Text style={[styles.selectedLayoutTitle, { color: colors.text }]}>
              {tr.layouts[selectedLayout as keyof typeof tr.layouts].title}
            </Text>
            <Text style={[styles.selectedLayoutDescription, { color: colors.textSecondary }]}>
              {tr.layouts[selectedLayout as keyof typeof tr.layouts].description}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.text} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.startButton,
            { backgroundColor: colors.primary },
            !question.trim() && { opacity: 0.5 }
          ]}
          onPress={handleStart}
          disabled={!question.trim()}
        >
          <Text style={[styles.startButtonText, { color: colors.white }]}>
            {tr.screens.home.start}
          </Text>
        </TouchableOpacity>
      </View>

      <LayoutSelectionModal
        visible={isLayoutModalVisible}
        onClose={() => setLayoutModalVisible(false)}
        onSelect={setSelectedLayout}
        selectedLayout={selectedLayout}
      />
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
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: fontSize.medium,
    marginTop: spacing.small,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: spacing.small,
  },
  iconButton: {
    padding: spacing.small,
  },
  content: {
    flex: 1,
    padding: spacing.medium,
  },
  sectionTitle: {
    fontSize: fontSize.large,
    fontWeight: '600',
    marginBottom: spacing.medium,
  },
  input: {
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    fontSize: fontSize.medium,
    minHeight: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    marginBottom: spacing.large,
  },
  selectedLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.medium,
    borderRadius: borderRadius.medium,
    marginBottom: spacing.large,
    paddingRight: spacing.large,
  },
  selectedLayoutTitle: {
    fontSize: fontSize.large,
    fontWeight: '600',
    marginBottom: spacing.small,
  },
  selectedLayoutDescription: {
    fontSize: fontSize.medium,
    lineHeight: fontSize.medium * 1.5,
  },
  startButton: {
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: spacing.large,
  },
  startButtonText: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
}); 