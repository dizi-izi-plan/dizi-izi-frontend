import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { HHAreaResponse, HHCountryResponse } from '@/types/api-types';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
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
      const result = await axios({
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
  baseQuery: axiosBaseQuery({
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
