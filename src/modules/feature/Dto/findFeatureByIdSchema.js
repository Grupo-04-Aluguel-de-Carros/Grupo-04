import { string, object } from 'zod';

export const findFeatureByIdSchema = object({
  params: object({
    id: string().trim(),
  }),
});
