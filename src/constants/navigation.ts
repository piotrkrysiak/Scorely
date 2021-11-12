import { StackNavigationProp } from '@react-navigation/stack';

export enum Route {
  LOGIN = 'Login',
  REGISTER = 'Register',
  HOME = 'Home',
  TABLES = 'Tables',
  RESULT = 'Result',
  PROFILE = 'Profile',
  HOME_TAB = 'HomeTab',
  AUTH = 'Auth',
}
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Tables: undefined;
  Result: undefined;
  Profile: undefined;
  HomeTab: undefined;
  Auth: undefined;
};

export type AuthScreenProp = StackNavigationProp<
  RootStackParamList,
  Route.AUTH
>;

export type HomeScreenProp = StackNavigationProp<
  RootStackParamList,
  Route.HOME_TAB
>;
