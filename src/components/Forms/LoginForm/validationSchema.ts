import { z } from 'zod';

// TODO: ADD CORRECT VALIDATION SCHEMA AND MESSAGES!
export const LoginFormValidation = z.object({
  login: z
    .string()
    .min(8, { message: 'Логин должен содержать не менее 8 символов' })
    .max(40, { message: 'Логин должен содержать не более 40 символов' })
    .email({ message: 'Некорректный email адрес' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 символов' })
    .max(40, { message: 'Пароль должен содержать не более 40 символов' })
    .regex(/[0-9A-Za-zА-Яа-я0-9!@#$%^&*.,]{8,}/, {
      message:
        'Пароль может содержать латиницу, кириллицу, цифры, спецсимволы, точку и запятую',
    })
    .regex(/(?=.*[!@#$%^&*])/, {
      message: 'Пароль должен содержать хотя бы 1 спецсимвол',
    })
    .regex(/(?=.*[A-ZА-Я])/, {
      message: 'Пароль должен содержать хотя бы 1 заглавную букву',
    }),
});

export type LoginFormType = z.infer<typeof LoginFormValidation>;
