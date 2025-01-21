import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { spacing, fontSize, borderRadius } from "../constants/theme";
import { SPREAD_LAYOUTS, getLayoutCardCount } from "../constants/layouts";
import { useApp } from "../contexts/AppContext";
import { Ionicons } from "@expo/vector-icons";
import { SpreadLayout } from "@/types/layouts";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (layout: SpreadLayout) => void;
  selectedLayout: SpreadLayout;
}

export default function LayoutSelectionModal({
  visible,
  onClose,
  onSelect,
  selectedLayout,
}: Props) {
  const { colors, tr } = useApp();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={[styles.overlay, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>
              {tr.screens.home.selectLayout}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content}>
            {SPREAD_LAYOUTS.map((layout) => (
              <TouchableOpacity
                key={layout}
                style={[
                  styles.layoutCard,
                  {
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border,
                    borderWidth: 1,
                  },
                  selectedLayout === layout && {
                    borderColor: colors.primary,
                    backgroundColor: colors.cardSelected,
                  },
                ]}
                onPress={() => {
                  onSelect(layout);
                  onClose();
                }}
              >
                <View style={styles.layoutHeader}>
                  <Text style={[styles.layoutTitle, { color: colors.text }]}>
                    {tr.layouts[layout].title}
                  </Text>
                  <Text
                    style={[styles.cardCount, { color: colors.textSecondary }]}
                  >
                    {getLayoutCardCount(layout)} cards
                  </Text>
                </View>
                <Text
                  style={[
                    styles.layoutDescription,
                    { color: colors.textSecondary },
                  ]}
                >
                  {tr.layouts[layout].description}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    borderTopLeftRadius: borderRadius.large,
    borderTopRightRadius: borderRadius.large,
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.large,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: fontSize.large,
    fontWeight: "600",
  },
  content: {
    padding: spacing.medium,
  },
  layoutCard: {
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    marginBottom: spacing.medium,
  },
  layoutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.small,
  },
  layoutTitle: {
    fontSize: fontSize.large,
    fontWeight: "600",
  },
  cardCount: {
    fontSize: fontSize.medium,
  },
  layoutDescription: {
    fontSize: fontSize.medium,
    lineHeight: fontSize.medium * 1.5,
  },
});
