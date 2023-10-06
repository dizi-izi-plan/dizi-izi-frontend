import { z } from 'zod';
import {
  LoginValidation,
  ConfirmPasswordValidation,
} from './validationTemplates';

export const RegistrationFormValidation = LoginValidation.and(
  ConfirmPasswordValidation,
);

export type RegistrationFormType = z.infer<typeof RegistrationFormValidation>;
