import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: number;
}

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getAll: builder.query<Post[], void>({
      query: () => `posts`,
      providesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    getById: builder.query<Post, string>({
      query: id => `posts/${id}`,
      providesTags: [{ type: 'Posts', id: 'POST' }],
    }),
  }),
});

export const { useGetAllQuery, useGetByIdQuery } = postApi;
