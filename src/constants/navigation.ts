import { StackNavigationProp } from '@react-navigation/stack';

export enum Route {
  LOGIN = 'Login',
  REGISTER = 'Register',
  HOME = 'Home',
  HOME_NAVIGATION = 'HomeNavigation',
  TABLES = 'Tables',
  RESULTS = 'Results',
  PROFILE = 'Profile',
  HOME_TAB = 'HomeTab',
  PLAYERS = 'Players',
  PLAYER = 'Player',
  MATCH = 'Match',
  MATCHES = 'Matches',
  NEWS = 'News',
  POST = 'Post',
  TOP_TABS = 'TopTabs',
  PLATER_DETAIL = 'PlayerDetail',
  PLAYER_STATS = 'PlayerStats',
  PLAYER_FIXTURE = 'PlayerFixture',
  CREATE_POST = 'CreatePost',
}

type PlayerScreenProps = {
  id: number;
};

type MatchScreenProps = {
  id: number;
  home: {
    name: string;
    logo: string;
    goals: number | undefined;
  };
  away: {
    name: string;
    logo: string;
    goals: number | undefined;
  };
  status: string;
};
type PostScreenProps = {
  id: number | string;
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Tables: undefined;
  Results: undefined;
  Profile: undefined;
  HomeTab: undefined;
  Players: undefined;
  Matches: undefined;
  News: undefined;
  TopTabs: undefined;
  PlayerDetails: undefined;
  PlayerStats: undefined;
  PlayerFixtures: undefined;
  Player: PlayerScreenProps;
  Match: MatchScreenProps;
  Post: PostScreenProps;
  CreatePost: undefined;
  HomeNavigation: undefined;
};

export type HomeScreenProp = StackNavigationProp<
  RootStackParamList,
  Route.HOME_TAB
>;
