import { object, string } from 'zod';

export const findBookingByIdSchema = object({
  params: object({
    id: string().uuid(),
  }),
});
