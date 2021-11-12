import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route, SCREEN_OPTIONS } from 'src/constants';
import AuthNavigator from './AuthNavigator';
import BottomTabsNavigator from './BottomTabs/BottomTabsNavigator';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <HomeStack.Screen name={Route.HOME_TAB} component={BottomTabsNavigator} />
      <HomeStack.Screen name={Route.AUTH} component={AuthNavigator} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
