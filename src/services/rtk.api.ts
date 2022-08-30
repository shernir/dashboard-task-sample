import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../interfaces';
import { endpoint } from '../enums/endpoint.enum';
/**
 * Service use RTK query as api caller
 */
export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, number>({
      query: (req) => ({
        url: endpoint.user + req,
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = API;
