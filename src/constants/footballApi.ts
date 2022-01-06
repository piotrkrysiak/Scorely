import { API_KEY } from '@env';

export const X_RAPIDAPI_KEY = { 'x-rapidapi-key': 'API_KEY' };
export const LEAGUE = '?league=39&season=2021';
export const PLAYER_URL = 'players?season=2021&id=';
export const STANDINGS_URL = '/standings?league=39&season=2021';
export const GAMEWEEK_URL = '/fixtures?league=39&season=2021&round=';
export const CURRENT_ROUND_URL =
  '/fixtures/rounds?league=39&season=2021&current=true';
export const REGULAR_SEASON_1 = 'Regular Season - 1';

export type filter =
  | 'topscorers'
  | 'topassists'
  | 'topyellowcards'
  | 'topredcards';

export const TOP_SCORERS = 'topscorers';
export const TOP_ASSISTS = 'topassists';
export const TOP_YELLOW_CARDS = 'topyellowcards';
export const TOP_RED_CARDS = 'topredcards';
