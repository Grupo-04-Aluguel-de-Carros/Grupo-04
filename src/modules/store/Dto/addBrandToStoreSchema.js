import { object, string } from 'zod';

export const addBrandToStoreSchema = object({
  body: object({
    brands: string().array().nonempty().optional(),
  }),
  params: object({
    id: string(),
  }),
});
