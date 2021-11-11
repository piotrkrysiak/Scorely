import { StackNavigationProp } from '@react-navigation/stack';

export enum Route {
  LOGIN = 'Login',
  REGISTER = 'Register',
}
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthScreenProp = StackNavigationProp<
  RootStackParamList,
  Route.LOGIN | Route.REGISTER
>;
