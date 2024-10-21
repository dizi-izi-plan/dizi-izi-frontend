export const PROFILE_FORM_DATA = {
  username: 'username',
  status: 'status',
  birthday: 'birthday',
  city: 'city',
} as const;

export const PROFILE_FORM_LABELS = {
  username: 'Имя',
  birthday: 'Дата рождения',
  city: 'Город проживания',
  status: 'Я дизайнер интерьеров',
} as const;

export const PROFILE_FORM_PLACEHOLDER = {
  choseCity: 'Выберите город',
  oldPassword: 'Введите текущий пароль',
  newPassword: 'Введите новый пароль',
  acceptNewPassword: 'Введите еще раз',
} as const;
