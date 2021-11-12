import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import HomeNavigator from './navigation/HomeNavigator';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
