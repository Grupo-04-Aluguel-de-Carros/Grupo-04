import { object, string } from 'zod';

export const getAllBrands = object({
  query: object({
    take: string()
      .transform(val => {
        const parsedTake = parseInt(val);
        return parsedTake;
      })
      .optional(),
    skip: string()
      .transform(val => {
        const parsedSkip = parseInt(val);
        return parsedSkip;
      })
      .optional(),
    name: string().trim().min(3).optional(),
  }),
});
