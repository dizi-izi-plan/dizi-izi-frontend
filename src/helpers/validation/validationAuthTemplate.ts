import { z } from 'zod';

export const AuthFormValidation = z.object({
  login: z
    .string()
    .min(8, { message: 'Логин должен содержать не менее 8 символов' })
    .max(40, { message: 'Логин должен содержать не более 40 символов' })
    .email({ message: 'Некорректный email адрес' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 символов' })
    .max(40, { message: 'Пароль должен содержать не более 40 символов' })
    .regex(/(?=.*[0-9])/, {
      message: 'Пароль должен содержать хотя бы 1 цифру',
    })
    .regex(/(?=.*[!@#$%^&*()"№;:?])/, {
      message: 'Пароль должен содержать хотя бы 1 спецсимвол',
    })
    .regex(/(?=.*[A-ZА-Я])/, {
      message: 'Пароль должен содержать хотя бы 1 заглавную букву',
    }),
});

export type AuthFormValidation = z.infer<typeof AuthFormValidation>;
