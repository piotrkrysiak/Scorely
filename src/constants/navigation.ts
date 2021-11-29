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
  PLAYERS = 'Players',
  PLAYER = 'Player',
  MATCH = 'Match',
  MATCHES = 'Matches',
  NEWS = 'News',
  POST = 'Post',
}

type PlayerScreenProps = {
  id: number;
};

type MatchScreenProps = {
  id: number;
};
type PostScreenProps = {
  id: number;
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Tables: undefined;
  Result: undefined;
  Profile: undefined;
  HomeTab: undefined;
  Auth: undefined;
  Players: undefined;
  Matches: undefined;
  News: undefined;
  Player: PlayerScreenProps;
  Match: MatchScreenProps;
  Post: PostScreenProps;
};

export type AuthScreenProp = StackNavigationProp<
  RootStackParamList,
  Route.AUTH
>;

export type HomeScreenProp = StackNavigationProp<
  RootStackParamList,
  Route.HOME_TAB
>;
