import { urls } from '@/helpers/common-constants/urls-constants';
import { diziIziSplitApi } from './diziIziSplitApi-slice';

export const DeleteApi = diziIziSplitApi.injectEndpoints({
  endpoints: (build) => ({
    deleteUser: build.mutation({
      query: () => ({ url: urls.authUrls.deleteUserUrl, method: 'DELETE' }),
    }),
  }),
  overrideExisting: false,
});

export const { useDeleteUserMutation } = DeleteApi;
