import { object, string } from 'zod';

export const createFeatureSchema = object({
  body: object({
    massageSystem: string(),
  }),
});
