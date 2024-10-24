import { diziIziSplitApi } from '@/redux/slices/diziIziSplitApi-slice';
import { urls } from '@/helpers/common-constants/urls-constants';

export const UserApi = diziIziSplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query({
      query: () => ({ url: urls.authUrls.getUserDataUrl }),
      providesTags: ['User'],
      keepUnusedDataFor: 360 * 4,
    }),
    deleteUser: build.mutation({
      query: () => ({ url: urls.authUrls.deleteUserUrl, method: 'DELETE' }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserDataQuery, useDeleteUserMutation } = UserApi;
