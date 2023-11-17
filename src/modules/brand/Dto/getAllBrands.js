import { object, string } from 'zod';

export const getAllBrands = object({
  query:object({
    name: string().trim().min(3).toUpperCase().optional(),
  })
});