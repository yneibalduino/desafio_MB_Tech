import 'react-native-get-random-values';
import React from 'react';
import './src/languages';

if (__DEV__) require('@tools/reactotron');

import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_700Bold_Italic,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';
import store from '@redux/index';
import { Routes } from '@routes/index';
import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

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
