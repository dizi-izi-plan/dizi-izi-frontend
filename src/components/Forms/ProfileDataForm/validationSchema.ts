import { UsernameValidation } from '@/helpers/validation/validationTemplates';
import { z } from 'zod';

export const AccountFormValidation = UsernameValidation;

export type AccountFormType = z.infer<typeof AccountFormValidation>;
