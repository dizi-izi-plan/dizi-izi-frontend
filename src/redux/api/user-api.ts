import { diziIziSplitApi } from '@/redux/api/diziIzi-splitApi';
import { urls } from '@/helpers/common-constants/urls-constants';

export const UserApi = diziIziSplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query({
      query: () => ({ url: urls.authUrls.getUserDataUrl }),
      providesTags: ['User'],
      keepUnusedDataFor: 360 * 4,
    }),
    setNewPassword: build.mutation({
      query: (data) => ({
        url: urls.authUrls.newPasswordUrl,
        method: 'post',
        body: data,
      }),
    }),
    deleteUser: build.mutation({
      query: (data) => ({
        url: urls.authUrls.getUserDataUrl,
        method: 'delete',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserDataQuery,
  useSetNewPasswordMutation,
  useDeleteUserMutation,
} = UserApi;
