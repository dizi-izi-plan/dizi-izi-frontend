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
        if (result && result.auth_token) {
          setCookie('token', result.auth_token, 3);
          return ['User'];
        }

        return [];
      },
    }),
    convertToken: build.mutation({
      query: ({ clientId, clientSecret, token }) => ({
        url: urls.authUrls.yandexLoginUrl,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          client_id: clientId,
          grant_type: 'convert_token',
          client_secret: clientSecret,
          backend: 'yandex-oauth2',
          token: token,
        }),
      }),
      invalidatesTags: (result) => {
        if (!result) return ['User'];
        setCookie('token', `Bearer ${result.access_token}`, 3);
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
  useConvertTokenMutation,
} = AuthApi;
