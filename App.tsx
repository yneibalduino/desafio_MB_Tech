import { StatusBar } from 'expo-status-bar';

import { ActivityIndicator } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { useFonts, Urbanist_400Regular, Urbanist_700Bold_Italic, Urbanist_700Bold } from '@expo-google-fonts/urbanist';

import theme from './src/theme';

import { EventCard } from './src/components/eventCard';

export default function App() {
  const [fontsLoaded] = useFonts({Urbanist_400Regular, Urbanist_700Bold, Urbanist_700Bold_Italic});

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <EventCard/> : <ActivityIndicator /> }
      
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}