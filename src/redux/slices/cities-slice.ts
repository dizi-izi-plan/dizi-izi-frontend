import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { HHAreaResponse, HHCountryResponse } from '@/types/api-types';

export const CitiesApi = createApi({
  reducerPath: 'CitiesApi',
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

export const { useGetCitiesQuery } = CitiesApi;
