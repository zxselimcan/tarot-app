import { Modal, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { spacing } from '../constants/theme';

interface Props {
  visible: boolean;
  onClose: () => void;
  cardImage: any;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CARD_RATIO = 1.4;

export default function CardModal({ visible, onClose, cardImage }: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.imageContainer}>
          <Image
            source={cardImage}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.medium,
  },
  imageContainer: {
    width: SCREEN_WIDTH * 0.8,
    height: (SCREEN_WIDTH * 0.8) * CARD_RATIO,
    maxHeight: SCREEN_HEIGHT * 0.8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
}); 