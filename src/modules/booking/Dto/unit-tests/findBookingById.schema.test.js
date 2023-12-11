/* eslint-disable no-undef */
import { findBookingByIdSchema } from "../findBookingById.schema.js";

describe('When a valid param', () => {
    it('Should find a booking by id', () => {
      const bookingToFind = {
        params: {
          id: 'c2a05208-6d48-4690-8f4c-d990a4b5dccf',
        },
      };
      const bookingParsed = findBookingByIdSchema.safeParse(bookingToFind);
      expect(bookingParsed.success).toBe(true);
    });
  });