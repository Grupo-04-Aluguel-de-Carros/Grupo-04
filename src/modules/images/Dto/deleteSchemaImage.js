import { object, string } from 'zod';

export const deleteSchemaImage = object({
  params: object({
    id: string().uuid().trim(),
  }),
});
