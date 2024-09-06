import { z } from 'zod';

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

export const ChangePasswordValidation = PasswordValidation.extend({
  oldPassword: z.string().min(8, { message: 'Обязательное поле' }),
  confirmPassword: z.string().nonempty({ message: 'Обязательное поле' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароль не соответствует введенному ранее',
  path: ['confirmPassword'],
});

export type changePasswordFormType = z.infer<typeof ChangePasswordValidation>;
