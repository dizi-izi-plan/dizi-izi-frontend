export const routes = {
  home: '/',
  commonErrorMessage: '/common-error-message',
  authRoutes: {
    register: '/register',
    registrationLetterMessage: '/registration-letter-message',
    confirmRegistrationMessage: '/confirm-registration-message',
    login: '/login',
    enterEmail: '/enter-email',
    resetPasswordMessage: '/reset-password-message',
    resetPassword: '/reset-password',
  },
  personalAccount: '/personal-account',
  projectRoutes: {
    roomSelection: '/room-selection',
    roomMeasurements: '/room-measurements',
  },
} as const;
