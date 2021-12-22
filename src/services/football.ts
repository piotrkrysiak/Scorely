import { API_URL } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CURRENT_ROUND_URL,
  GAMEWEEK_URL,
  STANDINGS_URL,
  TOP_SCORERS_URL,
  X_RAPIDAPI_KEY,
} from 'src/constants';
import {
  convertToMatches,
  convertToPlayers,
  convertToTable,
} from 'src/helpers/convertResponse';
import { Match, RootObjectGameweek } from 'src/ts/interfaces';
import { Player } from 'src/ts/interfaces/player';
import { RootObjectStanding } from 'src/ts/interfaces/standingsResponse';
import { TableTeam } from 'src/ts/interfaces/table';
import { RootObjectTopScorers } from 'src/ts/interfaces/topScorersResponse';

export const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['TopScorers', 'Matches', 'Round', 'Standings'],
  endpoints: builder => ({
    getTopScorers: builder.query<Player[], void>({
      query: () => ({
        url: TOP_SCORERS_URL,
        headers: X_RAPIDAPI_KEY,
      }),
      transformResponse: ({ response }: RootObjectTopScorers) =>
        convertToPlayers(response),
      providesTags: [{ type: 'TopScorers', id: 'LIST' }],
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
  useGetTopScorersQuery,
  useGetRoundQuery,
  useGetGameweekQuery,
  useGetLeagueTableQuery,
} = footballApi;
