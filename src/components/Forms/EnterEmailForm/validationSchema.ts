import { z } from 'zod';

// TODO: ADD CORRECT VALIDATION SCHEMA AND MESSAGES!
export const EnterEmailValidation = z.object({
  email: z.string().min(5, { message: 'Must be 5 or more characters long' }),
});

export type EnterEmailType = z.infer<typeof EnterEmailValidation>;
