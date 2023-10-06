import { z } from 'zod';

export const LoginValidation = z.object({
  login: z
    .string()
    .min(8, { message: 'Логин должен содержать не менее 8 символов' })
    .max(40, { message: 'Логин должен содержать не более 40 символов' })
    .email({ message: 'Некорректный email адрес' }),
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
    .regex(/(?=.*[!@#$%^&*()"№;:?])/, {
      message: 'Пароль должен содержать хотя бы 1 спецсимвол',
    })
    .regex(/(?=.*[A-ZА-Я])/, {
      message: 'Пароль должен содержать хотя бы 1 заглавную букву',
    }),
});

export type passwordFormType = z.infer<typeof PasswordValidation>;

export const ConfirmPasswordValidation = PasswordValidation.extend({
  confirmPassword: z.string().nonempty({ message: 'Обязательное поле' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароль не соответствует введенному ранее',
  path: ['confirmPassword'],
});

export type confirmPasswordFormType = z.infer<typeof ConfirmPasswordValidation>;
