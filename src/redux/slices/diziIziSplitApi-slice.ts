import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const diziIziSplitApi = createApi({
  reducerPath: 'diziIziSplitApi',
  tagTypes: ['User'],
  baseQuery: axiosBaseQuery({ baseUrl: API_URL }),
  endpoints: () => ({}),
});
