import { z } from 'zod';
import { RegisterValidation } from '@/helpers/validation/validationTemplates';

export const RegistrationFormValidation = RegisterValidation;

export type RegistrationFormType = z.infer<typeof RegistrationFormValidation>;
