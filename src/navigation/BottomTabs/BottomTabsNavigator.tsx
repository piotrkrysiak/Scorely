import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BOTTOM_TABS_HEIGHT, Route } from 'src/constants';
import {
  HomeScreen,
  ProfileScreen,
  ResultsScreen,
  TablesScreen,
} from 'src/screens';
import TabIcon from './TabIcon';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const { bottom } = useSafeAreaInsets();

  const tabBarStyle: StyleProp<ViewStyle> = {
    borderTopWidth: 0,
    height: BOTTOM_TABS_HEIGHT + bottom,
  };

  return (
    <Tab.Navigator screenOptions={{ tabBarStyle }}>
      <Tab.Screen
        name={Route.HOME}
        component={HomeScreen}
        options={{
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TabIcon
              onPress={onPress}
              focused={accessibilityState?.selected}
              name="home"
              label={Route.HOME}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Route.RESULT}
        component={ResultsScreen}
        options={{
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TabIcon
              onPress={onPress}
              focused={accessibilityState?.selected}
              name="list"
              label={Route.RESULT}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={Route.TABLES}
        component={TablesScreen}
        options={{
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TabIcon
              onPress={onPress}
              focused={accessibilityState?.selected}
              name="stats-chart"
              label={Route.TABLES}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={Route.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TabIcon
              onPress={onPress}
              focused={accessibilityState?.selected}
              name="person"
              label={Route.PROFILE}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
