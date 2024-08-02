import { diziIziSplitApi } from '@/redux/slices/diziIziSplitApi-slice';

export const UserApi = diziIziSplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query({
      query: () => ({ url: 'auth/users/me/' }),
      providesTags: ['User'],
      keepUnusedDataFor: 360 * 4,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserDataQuery } = UserApi;
