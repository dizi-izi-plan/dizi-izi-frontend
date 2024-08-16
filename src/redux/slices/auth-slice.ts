import { setCookie, deleteCookie } from '@/helpers/cookie/cookie';
import { diziIziSplitApi } from '@/redux/slices/diziIziSplitApi-slice';

export const AuthApi = diziIziSplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({ url: 'auth/token/login/', method: 'post', data }),
      invalidatesTags: (result) => {
        setCookie('token', result.auth_token, 3);
        return ['User'];
      },
    }),
    logout: build.mutation({
      query: () => ({ url: 'auth/token/logout/', method: 'post' }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          deleteCookie('token');
          dispatch(AuthApi.util.resetApiState());
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useLogoutMutation } = AuthApi;
