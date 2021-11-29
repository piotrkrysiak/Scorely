import { API_KEY } from '@env';

export const X_RAPIDAPI_KEY = { 'x-rapidapi-key': API_KEY };
export const TOP_SCORERS_URL = '/players/topscorers?league=39&season=2021';
export const GAMEWEEK_URL = '/fixtures?league=39&season=2021&round=';
export const CURRENT_ROUND_URL =
  '/fixtures/rounds?league=39&season=2021&current=true';
export const REGULAR_SEASON_1 = 'Regular Season - 1';
