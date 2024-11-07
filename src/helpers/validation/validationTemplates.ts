import { z } from 'zod';

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
