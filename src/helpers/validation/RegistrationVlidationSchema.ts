import { z } from 'zod';
import { AuthFormValidation } from './validationAuthTemplate';

export const RegistrationFormValidation = AuthFormValidation.extend({
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароль не соответствует введенному ранее',
  path: ['confirmPassword'],
});

export type RegistrationFormType = z.infer<typeof RegistrationFormValidation>;
