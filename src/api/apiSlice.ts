import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type registrationDataType = {
  email: string;
  password: string;
  re_password: string;
};

type registrationResponseType = {
  id: string;
  email: string;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://diziizi.ru/api/v1/' }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => '/auth/users/',
    }),
    registration: builder.mutation<
      registrationResponseType,
      registrationDataType
    >({
      query: (body) => ({
        url: 'auth/users/',
        method: 'POST',
        body,
      }),
    }),
    activateUser: builder.mutation({
      query: (body) => ({
        url: 'auth/users/activation',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useGetUserDataQuery,
  useActivateUserMutation,
} = authApi;
