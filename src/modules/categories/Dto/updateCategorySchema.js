import { object, string } from 'zod';

export const updateCategorySchema = object({
  name: string().optional(),
  description: string().optional(),
});
