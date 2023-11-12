import { object, string } from 'zod';

export const excluseFeatureSchema = object({
  params: object({
    id: string().uuid(),
  }),
});
