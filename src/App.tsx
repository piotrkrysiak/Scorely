import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import HomeNavigator from './navigation/HomeNavigator';
import useInitialUserCheck from './hooks/useInitialUserCheck';
import { lightPalette } from './assets/styles';

const App = () => {
  const scheme = useColorScheme();

  useInitialUserCheck();
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: lightPalette.extraWhite,
      border: lightPalette.white,
    },
  };
  const darkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      text: lightPalette.white,
      border: lightPalette.dark85,
    },
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
