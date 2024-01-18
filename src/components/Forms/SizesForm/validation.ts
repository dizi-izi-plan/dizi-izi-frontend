import { z, number, string } from 'zod';

export const WallsValidation = z.object({
  first: z.union([number(), string()]),
  second: z.union([number(), string()]),
  third: z.union([number(), string()]),
  forth: z.union([number(), string()]),
});

export const SizesFormValidation = z.object({
  walls: WallsValidation,
  doors: z.object({}),
  windows: z.object({}),
});

export type Step1FormType = z.infer<typeof WallsValidation>;
export type SizesFormType = z.infer<typeof SizesFormValidation>;
