import React from 'react';

if (__DEV__) require('./src/tools/reactotron');

import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_700Bold_Italic,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './src/redux';
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
      <Provider store={store}>
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </Provider>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
