import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { HHAreaResponse, HHCountryResponse } from '@/types/api-types';
import { axiosInstance } from '@/helpers/axios/axiosInterceptors';
import { setCookie, deleteCookie } from '@/helpers/cookie/cookie';
import { setIsAuth, setUserData } from './user-slice';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const axiosBaseQuery =
  ({
    baseUrl = '',
  }): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const apiCities = createApi({
  reducerPath: 'apiCities',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.hh.ru/',
  }),
  endpoints: (build) => ({
    getCities: build.query({
      query: () => ({ url: 'areas/113' }),
      transformResponse: (response: HHCountryResponse) => {
        const set = new Set<string>();
        response.areas.forEach((region: HHAreaResponse) => {
          set.add(region.name);
          for (const city of region.areas) {
            set.add(city.name);
          }
        });
        return Array.from(set).sort();
      },
    }),
  }),
});

export const { useGetCitiesQuery } = apiCities;

export const apiDiziIzi = createApi({
  reducerPath: 'apiDiziIzi',
  tagTypes: ['User'],
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({ url: 'auth/token/login/', method: 'post', data }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setCookie('token', data.auth_token, 3);
          dispatch(setIsAuth(true));
          setTimeout(() => {
            dispatch(apiDiziIzi.util.invalidateTags(['User']));
          }, 1000);
        } catch (err) {
          console.log(err);
        }
      },
    }),
    logout: build.mutation({
      query: () => ({ url: 'auth/token/logout/', method: 'post' }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          deleteCookie('token');
          dispatch(setIsAuth(false));
          dispatch(setUserData(null));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUserData: build.query({
      query: () => ({ url: 'auth/users/me/' }),
      providesTags: ['User'],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setIsAuth(true));
          dispatch(setUserData(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useGetUserDataQuery, useLogoutMutation } =
  apiDiziIzi;
