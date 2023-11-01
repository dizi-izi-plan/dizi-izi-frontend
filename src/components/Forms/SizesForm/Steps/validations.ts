import { z } from 'zod';

const createWallValidation = () =>
  z
    .number()
    .int()
    .min(1, { message: 'Длина должна содержать не менее 1 символа' })
    .max(4, { message: 'Длина должна содержать не более 4 символов' });

export const Step1Validation = z.object({
  firstWall: createWallValidation(),
  secondWall: createWallValidation(),
  thirdWall: createWallValidation(),
  forthWall: createWallValidation(),
});

export type Step1FormType = z.infer<typeof Step1Validation>;
