import { object, string } from 'zod';

export const updateBookingSchema = object({
  params: object({
    id: string().uuid(),
  }),
});
