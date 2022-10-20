import React from 'react';

import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_700Bold_Italic,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_700Bold,
    Urbanist_700Bold_Italic,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
