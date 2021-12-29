import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './navigation/HomeNavigator';
import useInitialUserCheck from './hooks/useInitialUserCheck';

const App = () => {
  useInitialUserCheck();
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
