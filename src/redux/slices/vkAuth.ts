import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';

const VK_TOKEN_URL = 'https://id.vk.com/oauth2/auth';

export const vkAuthApi = createApi({
  reducerPath: 'vkAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: VK_TOKEN_URL }),
  endpoints: (builder) => ({
    getVkToken: builder.mutation({
      query: ({ clientId,  code, redirectUri }) => ({
        url: '',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            grant_type: 'authorization_code',
            redirect_uri:redirectUri,
            client_id:clientId,
            code,
          },
      }),
    }),
  }),
});

export const { useGetVkTokenMutation } = vkAuthApi;
