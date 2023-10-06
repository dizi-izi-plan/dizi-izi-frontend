import { z } from 'zod';
import {
  LoginValidation,
  PasswordValidation,
} from '../../../helpers/validation/validationTemplates';

export const LoginFormValidation = LoginValidation.and(PasswordValidation);

export type LoginFormType = z.infer<typeof LoginFormValidation>;
