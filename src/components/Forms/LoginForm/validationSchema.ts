import { z } from 'zod';

// TODO: ADD CORRECT VALIDATION SCHEMA AND MESSAGES!
export const LoginFormValidation = z.object({
  login: z.string().min(5, { message: 'Must be 5 or more characters long' }),
  password: z.string(),
});

export type LoginFormType = z.infer<typeof LoginFormValidation>;
