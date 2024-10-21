import { ChangePasswordValidation } from '@/helpers/validation/validationTemplates';
import { z } from 'zod';

export const ChangePasswordFormValidation = ChangePasswordValidation;

export type ChangePasswordFormType = z.infer<
  typeof ChangePasswordFormValidation
>;
