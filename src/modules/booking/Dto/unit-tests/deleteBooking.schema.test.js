/* eslint-disable no-undef */
import { excludeBookingSchema } from '../excludeBooking.schema.js';

describe('When a valid param', () => {
  it('Should delete the booking related to the passed id', () => {
    const bookingToDelete = {
      params: {
        id: 'c2a05208-6d48-4690-8f4c-d990a4b5dccf',
      },
    };
    const bookingParsed = excludeBookingSchema.safeParse(bookingToDelete);
    expect(bookingParsed.success).toBe(true);
  });
});
describe('When an invalid param', () => {
  it('Should not delete the booking if it exists', () => {
    const bookingToDelete = {
      params: {
        id: 'c2a05208-6d48-4690-8f4c-d990a4b5dc',
      },
    };
    const bookingParsed = excludeBookingSchema.safeParse(bookingToDelete);
    expect(bookingParsed.success).toBe(false);
  });
});
