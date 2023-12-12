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
  it('Should not delete the booking if is an invalid uuid', () => {
    const bookingToDelete = {
      params: {
        id: 'c2a05208-6d48-4690-8f4c-d990a4b5dc',
      },
    };
    const bookingParsed = excludeBookingSchema.safeParse(bookingToDelete);
    expect(bookingParsed.success).toBe(false);
  });
  it('Should not delete a booking with an id in a query object', () => {
    const bookingToDelete = {
      query: {
        id: 'c2a05208-6d48-4690-8f4c-d990a4b5dccf',
      },
    };
    const bookingParsed = excludeBookingSchema.safeParse(bookingToDelete);
    expect(bookingParsed.success).toBe(false);
  });
  it('Should not delete a booking with an id in a body object', () => {
    const bookingToDelete = {
      body: {
        id: 'c2a05208-6d48-4690-8f4c-d990a4b5dccf',
      },
    };
    const bookingParsed = excludeBookingSchema.safeParse(bookingToDelete);
    expect(bookingParsed.success).toBe(false);
  });
  it('Should not delete a booking with an empty id', () => {
    const bookingToDelete = {
      params: {
        id: '',
      },
    };
    const bookingParsed = excludeBookingSchema.safeParse(bookingToDelete);
    expect(bookingParsed.success).toBe(false);
  });
});
