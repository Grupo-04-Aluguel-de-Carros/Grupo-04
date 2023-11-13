import { string, object } from 'zod';

export const findAllFeaturesSchema = object({
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
  }),
});
