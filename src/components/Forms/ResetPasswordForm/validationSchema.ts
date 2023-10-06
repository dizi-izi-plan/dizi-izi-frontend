import { z } from 'zod';

// TODO: ADD CORRECT VALIDATION SCHEMA AND MESSAGES!
export const ResetPasswordValidation = z.object({
  password: z.string().min(5, { message: 'Must be 5 or more characters long' }),
});

export type ResetPasswordType = z.infer<typeof ResetPasswordValidation>;
