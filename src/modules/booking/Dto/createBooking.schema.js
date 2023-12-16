import { object, string } from 'zod';

export const createBookingSchema = object({
  body: object({
    carId: string().uuid(),
    userId: string().uuid(),
  }),
});
