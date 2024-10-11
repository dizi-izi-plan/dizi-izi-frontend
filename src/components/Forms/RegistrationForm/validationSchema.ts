import { z } from 'zod';
import {
  ConfirmPasswordValidation,
  LoginValidation,
} from '../../../helpers/validation/validationTemplates';

export const RegistrationFormValidation = LoginValidation.and(
  ConfirmPasswordValidation,
);

export type RegistrationFormType = z.infer<typeof RegistrationFormValidation>;
