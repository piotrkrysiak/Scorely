import { API_KEY, API_URL } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { convertToPlayers } from 'src/helpers/convertResponse';
import { Player } from 'src/ts/interfaces/player';
import { RootObject } from 'src/ts/interfaces/topPlayerResponse';

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: number;
}

export const playerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/players/`,
  }),
  tagTypes: ['TopPlayers'],
  endpoints: builder => ({
    getAll: builder.query<Player[], void>({
      query: () => ({
        url: `topscorers?league=39&season=2021`,
        headers: { 'x-rapidapi-key': API_KEY },
      }),
      transformResponse: ({ response }: RootObject) =>
        convertToPlayers(response),
      providesTags: [{ type: 'TopPlayers', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllQuery } = playerApi;
