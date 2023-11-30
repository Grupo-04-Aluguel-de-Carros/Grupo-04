import { object, string } from 'zod';

export const excludeBookingSchema = object({
  params: object({
    id: string().uuid(),
  }),
});
