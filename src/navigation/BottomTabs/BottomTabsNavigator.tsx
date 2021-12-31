import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { lightPalette } from 'src/assets/styles';
import { Icon } from 'src/components/common';
import {
  BOTTOM_TABS_HEIGHT,
  headerTitleStyle,
  HomeScreenProp,
  MATERIAL,
  Route,
} from 'src/constants';
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
  const { navigate } = useNavigation<HomeScreenProp>();

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
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigate(Route.CREATE_POST)}
            >
              <Icon
                name="add"
                size={30}
                type={MATERIAL}
                color={lightPalette.primary}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle,
          headerTitleAlign: 'left',
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
        name={Route.RESULTS}
        component={ResultsScreen}
        options={{
          headerTitleStyle,
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TabIcon
              onPress={onPress}
              focused={accessibilityState?.selected}
              name="list"
              label={Route.RESULTS}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={Route.TABLES}
        component={TablesScreen}
        options={{
          headerTitleStyle,
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
          headerTitleStyle,
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TabIcon
              onPress={onPress}
              focused={accessibilityState?.selected}
              name="person"
              label={Route.PROFILE}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
