import { z, number, array } from 'zod';

export const FurnitureValidation = z.object({
  bed: number(),
  bedsNumber: number(),
  wardrobe: number(),
  other: array(number()),
});
