import { setCookie, deleteCookie } from '@/helpers/cookie/cookie';
import { diziIziSplitApi } from '@/redux/slices/diziIziSplitApi-slice';
import {
  RegistrationDataType,
  RegistrationResponseType,
} from '@/types/api-types';
import { urls } from '@/helpers/common-constants/urls-constants';

export const AuthApi = diziIziSplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({ url: urls.authUrls.loginUrl, method: 'post', data }),
      invalidatesTags: (result) => {
        setCookie('token', result.auth_token, 3);
        return ['User'];
      },
    }),
    logout: build.mutation({
      query: () => ({ url: urls.authUrls.logoutUrl, method: 'post' }),
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
    registration: build.mutation<
      RegistrationResponseType,
      RegistrationDataType
    >({
      query: (data) => ({
        url: urls.authUrls.registrationUrl,
        method: 'POST',
        data,
      }),
    }),
    activateUser: build.mutation({
      query: (data) => ({
        url: urls.authUrls.activateUserUrl,
        method: 'POST',
        data,
      }),
    }),
    resendActivation: build.mutation({
      query: (data) => ({
        url: urls.authUrls.resendActivationUrl,
        method: 'POST',
        data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: urls.authUrls.resetPasswordUrl,
        method: 'post',
        data,
      }),
    }),
    resetPasswordConfirm: build.mutation({
      query: (data) => ({
        url: urls.authUrls.resetPasswordConfirmUrl,
        method: 'post',
        data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegistrationMutation,
  useActivateUserMutation,
  useResendActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
} = AuthApi;
