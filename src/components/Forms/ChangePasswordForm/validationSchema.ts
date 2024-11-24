import { PasswordValidation } from '@/helpers/validation/validationTemplates';
import { z } from 'zod';

export const ChangePasswordFormValidation = PasswordValidation.extend({
  oldPassword: z.string().min(8, { message: 'Обязательное поле' }),
  confirmPassword: z.string().nonempty({ message: 'Обязательное поле' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароль не соответствует введенному ранее',
  path: ['confirmPassword'],
});

export type ChangePasswordFormType = z.infer<
  typeof ChangePasswordFormValidation
>;
