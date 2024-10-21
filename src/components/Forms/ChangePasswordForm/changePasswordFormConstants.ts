export const CHANGE_PASSWORD_FORM_DATA = {
  oldPassword: 'oldPassword',
  password: 'password',
  confirmPassword: 'confirmPassword',
} as const;

export const CHANGE_PASSWORD_FORM_LABELS = {
  oldPassword: 'Текущий пароль',
  password: 'Новый пароль',
  confirmPassword: 'Повторить новый пароль',
} as const;

export const CHANGE_PASSWORD_FORM_PLACEHOLDER = {
  oldPassword: 'Введите текущий пароль',
  password: 'Введите новый пароль',
  confirmPassword: 'Введите еще раз',
} as const;
