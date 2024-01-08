import { z, number, string } from 'zod';

export const WallsValidation = z.object({
  firstWall: z.union([number(), string()]),
  secondWall: z.union([number(), string()]),
  thirdWall: z.union([number(), string()]),
  forthWall: z.union([number(), string()]),
});

export const SizesFormValidation = z.object({
  walls: WallsValidation,
  doors: z.object({}),
  windows: z.object({}),
});

export type Step1FormType = z.infer<typeof WallsValidation>;
export type SizesFormType = z.infer<typeof SizesFormValidation>;
