import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route, SCREEN_OPTIONS } from 'src/constants';
import {
  CreatePost,
  MatchesScreen,
  MatchScreen,
  NewsScreen,
  PlayerScreen,
  PlayersScreen,
  PostScreen,
} from 'src/screens';
import AuthNavigator from './AuthNavigator';
import BottomTabsNavigator from './BottomTabs/BottomTabsNavigator';
import TopTabs from './TopTabs';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <HomeStack.Screen name={Route.HOME_TAB} component={BottomTabsNavigator} />
      <HomeStack.Screen name={Route.PLAYERS} component={PlayersScreen} />
      <HomeStack.Screen name={Route.PLAYER} component={PlayerScreen} />
      <HomeStack.Screen name={Route.MATCHES} component={MatchesScreen} />
      <HomeStack.Screen name={Route.MATCH} component={MatchScreen} />
      <HomeStack.Screen name={Route.AUTH} component={AuthNavigator} />
      <HomeStack.Screen name={Route.NEWS} component={NewsScreen} />
      <HomeStack.Screen name={Route.POST} component={PostScreen} />
      <HomeStack.Screen name={Route.TOP_TABS} component={TopTabs} />
      <HomeStack.Screen name={Route.CREATE_POST} component={CreatePost} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
