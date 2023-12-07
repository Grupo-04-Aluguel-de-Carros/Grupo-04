import { object, string } from 'zod';

export const findBookingByUserId = object({
  params: object({
    id: string().uuid(),
  }),
});
