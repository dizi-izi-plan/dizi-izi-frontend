import { z } from 'zod';
import { AuthFormValidation } from '../../../helpers/validation/validationAuthTemplate';

export const LoginFormValidation = AuthFormValidation;

export type LoginFormType = z.infer<typeof LoginFormValidation>;
