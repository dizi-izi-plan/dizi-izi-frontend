import {
  BaseQueryFn,
  createApi,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { deleteCookie, getCookie } from '@/helpers/cookie/cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const baseQueryWithToken = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = getCookie('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});

export const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQueryWithToken(args, api, extraOptions);

  if (result.error?.status === 401) {
    deleteCookie('token');
  }

  return result;
};

export const diziIziSplitApi = createApi({
  reducerPath: 'diziIziSplitApi',
  tagTypes: ['User'],
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
