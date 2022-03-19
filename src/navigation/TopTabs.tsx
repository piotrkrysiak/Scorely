import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { lightPalette } from 'src/assets/styles';
import { Route } from 'src/constants';
import PlayerDetails from 'src/components/player/PlayerDetails';
import PlayerStats from 'src/components/player/PlayerStats';
import PlayerFixture from 'src/components/player/PlayerFixture';

const Tab = createMaterialTopTabNavigator();

interface Props {
  id: number;
}

const TopTabs: FC<Props> = ({ id }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: lightPalette.dark,
      tabBarLabelStyle: {
        textTransform: 'none',
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
      },
      tabBarInactiveTintColor: lightPalette.dark60,
      tabBarIndicatorStyle: {
        height: undefined,
        borderRadius: 12,
        bottom: '9%',
        top: '9%',
        backgroundColor: lightPalette.secondary,
      },
      tabBarStyle: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 12,
        backgroundColor: 'transparent',
      },
    }}
  >
    <Tab.Screen
      options={{
        title: 'Details',
      }}
      name={Route.PLATER_DETAIL}
    >
      {() => <PlayerDetails id={id} />}
    </Tab.Screen>
    <Tab.Screen
      options={{
        title: 'Stats',
      }}
      name={Route.PLAYER_STATS}
    >
      {() => <PlayerStats id={id} />}
    </Tab.Screen>
  </Tab.Navigator>
);

export default TopTabs;
