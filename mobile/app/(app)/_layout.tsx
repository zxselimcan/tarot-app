import { Stack } from 'expo-router';
import { useApp } from '../../contexts/AppContext';

export default function AppLayout() {
  const { colors } = useApp();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background
        },
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="cards" />
      <Stack.Screen name="reading" />
      <Stack.Screen name="history" />
      <Stack.Screen name="settings" />
    </Stack>
  );
} 