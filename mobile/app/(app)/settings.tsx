import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { spacing, fontSize, borderRadius } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../contexts/AppContext';

export default function Settings() {
  const router = useRouter();
  const { colors, isDarkMode, toggleTheme, language, setLanguage, tr } = useApp();

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
          <Text style={[styles.title, { color: colors.text }]}>{tr.screens.settings.title}</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={[styles.section, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            {tr.screens.settings.theme}
          </Text>
          <View style={styles.settingRow}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>
              {tr.screens.settings.darkMode}
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.disabled, true: colors.primary }}
              thumbColor={colors.white}
            />
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            {tr.screens.settings.language}
          </Text>
          <TouchableOpacity 
            style={[
              styles.languageOption, 
              { borderBottomColor: colors.border, marginVertical: spacing.medium },
              language === 'tr' && { backgroundColor: colors.cardSelected , marginVertical: spacing.medium }
            ]}
            onPress={() => setLanguage('tr')}
          >
            <Text style={[styles.languageText, { color: colors.text }]}>{tr.screens.settings.languages.turkish}</Text>
            {language === 'tr' && (
              <Ionicons name="checkmark" size={24} color={colors.primary} />
            )}
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.languageOption,
              language === 'en' && { backgroundColor: colors.cardSelected }
            ]}
            onPress={() => setLanguage('en')}
          >
            <Text style={[styles.languageText, { color: colors.text }]}>{tr.screens.settings.languages.english}</Text>
            {language === 'en' && (
              <Ionicons name="checkmark" size={24} color={colors.primary} />
            )}
          </TouchableOpacity>
        </View>

        <View style={[styles.section, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            {tr.screens.settings.about}
          </Text>
          <View style={styles.settingRow}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>{tr.screens.settings.version}</Text>
            <Text style={[styles.settingValue, { color: colors.textSecondary }]}>1.0.0</Text>
          </View>
        </View>
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
    marginBottom: spacing.medium,
  },
  content: {
    padding: spacing.medium,
  },
  section: {
    borderRadius: borderRadius.medium,
    overflow: 'hidden',
    marginBottom: spacing.medium,
  },
  sectionTitle: {
    fontSize: fontSize.large,
    fontWeight: '600',
    padding: spacing.medium,
    paddingBottom: 0,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.medium,
  },
  settingLabel: {
    fontSize: fontSize.medium,
    fontWeight: '500',
  },
  settingValue: {
    fontSize: fontSize.medium,
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.medium,
    borderBottomWidth: 1,
  },
  languageText: {
    fontSize: fontSize.medium,
    fontWeight: '500',
  },
}); 