import { z } from 'zod';
import dayjs from 'dayjs';

export const CityValidation = z.object({
  city: z
    .string()
    .min(2, { message: 'Название города должно содержать не менее 2 символов' })
    .max(20, {
      message: 'Название города должно содержать не более 20 символов',
    }),
});

export type CityFormType = z.infer<typeof CityValidation>;

export const BirthdayValidation = z.object({
  birthday: z
    .string()
    .nullable()
    .refine(
      (value) => {
        if (!value) return true;

        const date = dayjs(value, 'YYYY-MM-DD', true);
        const today = dayjs();
        const tomorrow = today.add(0, 'day');

        return (
          date.isValid() &&
          date.isBefore(tomorrow) &&
          date.date() === parseInt(value.split('-')[2], 10)
        );
      },
      {
        message: 'Дата рождения должна быть существующей',
      },
    )
    .transform((value) => dayjs(value).format('YYYY-MM-DD')),
});

export type BirthdayFormType = z.infer<typeof BirthdayValidation>;

export const StatusValidation = z.object({
  status: z.boolean(),
});

export type StatusFormType = z.infer<typeof StatusValidation>;

export const UsernameValidation = z.object({
  username: z
    .string()
    .min(2, { message: 'Имя должно содержать не менее 2 символов' })
    .max(20, { message: 'Имя должно содержать не более 20 символов' })
    .regex(/^[a-zA-Zа-яА-Я]+$/, {
      message: 'Имя должно содержать только буквы',
    }),
});

export type UsernameFormType = z.infer<typeof UsernameValidation>;

export const LoginValidation = z.object({
  email: z
    .string()
    .min(8, { message: 'Email должен содержать не менее 8 символов' })
    .max(40, { message: 'Email должен содержать не более 40 символов' })
    .email({ message: 'Некорректный email адрес' })
    .refine(
      (s) => !(s.includes('-@') || s[0] === '-'),
      'Некорректный email адрес',
    )
    .transform((email) => email.toLowerCase()),
});

export type LoginFormType = z.infer<typeof LoginValidation>;

export const PasswordValidation = z.object({
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 символов' })
    .max(40, { message: 'Пароль должен содержать не более 40 символов' })
    .regex(/(?=.*[0-9])/, {
      message: 'Пароль должен содержать хотя бы 1 цифру',
    })
    .regex(/(?=.*[!#$%z&‘*+—/=?^_`{|}~,.;:])/, {
      message: 'Пароль должен содержать хотя бы 1 спецсимвол',
    })
    .regex(/(?=.*[A-Z])/, {
      message: 'Пароль должен содержать хотя бы 1 заглавную букву',
    })
    .regex(/(?=.*[a-z])/, {
      message: 'Пароль должен содержать хотя бы 1 cтрочную букву',
    })
    .regex(/^(?!.*[^\P{Alphabetic}a-zA-Z])/u, {
      message:
        'Пароль может содержать только латинские буквы, цифры, спецсимволы',
    })
    .refine((s) => !s.includes(' '), 'Пароль не может содержать пробелы'),
});

export type passwordFormType = z.infer<typeof PasswordValidation>;

export const ConfirmPasswordValidation = PasswordValidation.extend({
  re_password: z.string().nonempty({ message: 'Обязательное поле' }),
}).refine((data) => data.password === data.re_password, {
  message: 'Пароль не соответствует введенному ранее',
  path: ['re_password'],
});

export type confirmPasswordFormType = z.infer<typeof ConfirmPasswordValidation>;
