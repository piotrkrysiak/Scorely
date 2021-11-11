import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from 'src/screens';
import { RootStackParamList, Route } from 'src/constants/navigation';
import { SCREEN_OPTIONS } from 'src/constants/common';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator<RootStackParamList>();

  return (
    <AuthStack.Navigator
      initialRouteName={Route.LOGIN}
      screenOptions={SCREEN_OPTIONS}
    >
      <AuthStack.Screen name={Route.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={Route.REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
