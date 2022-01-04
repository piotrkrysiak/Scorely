import { API_URL } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CURRENT_ROUND_URL,
  GAMEWEEK_URL,
  LEAGUE,
  PLAYER_URL,
  STANDINGS_URL,
  X_RAPIDAPI_KEY,
} from 'src/constants';
import {
  convertToMatches,
  convertToPlayers,
  convertToPlayersDetails,
  convertToPlayersSearch,
  convertToTable,
} from 'src/helpers/convertResponse';
import {
  Player,
  TableTeam,
  Match,
  RootObjectGameweek,
  RootObjectStanding,
  RootObjectTopScorers,
  PlayerDetails,
} from 'src/ts/interfaces';

type filter = 'topscorers' | 'topassists' | 'topyellowcards' | 'topredcards';

export const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['TopScorers', 'Matches', 'Round', 'Standings', 'Player'],
  endpoints: builder => ({
    getTopPlayers: builder.query<Player[], filter>({
      query: filter => ({
        url: `players/${filter}${LEAGUE}`,
        headers: X_RAPIDAPI_KEY,
      }),
      transformResponse: ({ response }: RootObjectTopScorers) =>
        convertToPlayers(response),
      providesTags: [{ type: 'TopScorers', id: 'LIST' }],
    }),
    getPlayer: builder.query<PlayerDetails, number>({
      query: id => ({
        url: `${PLAYER_URL}${id}`,
        headers: X_RAPIDAPI_KEY,
      }),
      transformResponse: ({ response }: RootObjectTopScorers) =>
        convertToPlayersDetails(response),
      providesTags: [{ type: 'Player', id: 'ID' }],
    }),
    getPlayerSearch: builder.query<Player[], string>({
      query: query => ({
        url: `players?season=2021&league=39&search=${query}`,
        headers: X_RAPIDAPI_KEY,
      }),
      transformResponse: ({ response }: RootObjectTopScorers) =>
        convertToPlayersSearch(response),
      providesTags: [{ type: 'Player', id: 'ID' }],
    }),
    getLeagueTable: builder.query<TableTeam[], void>({
      query: () => ({
        url: STANDINGS_URL,
        headers: X_RAPIDAPI_KEY,
      }),
      transformResponse: ({ response }: RootObjectStanding) =>
        convertToTable(response),
      providesTags: [{ type: 'Standings', id: 'LIST' }],
    }),
    getRound: builder.query<string, void>({
      query: () => ({
        url: CURRENT_ROUND_URL,
        headers: X_RAPIDAPI_KEY,
      }),
      transformResponse: ({ response }) => response,
      providesTags: [{ type: 'Round', id: 'ID' }],
    }),
    getGameweek: builder.query<Match[], string>({
      query: round => ({
        url: `${GAMEWEEK_URL}${round}`,
        headers: X_RAPIDAPI_KEY,
      }),
      transformResponse: ({ response }: RootObjectGameweek) =>
        convertToMatches(response),
      providesTags: [{ type: 'Matches', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTopPlayersQuery,
  useGetRoundQuery,
  useGetGameweekQuery,
  useGetPlayerQuery,
  useGetLeagueTableQuery,
  useGetPlayerSearchQuery,
} = footballApi;
