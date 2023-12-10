/* eslint-disable no-undef */
import { dateHandle } from '../../../../middleware/dateHandle.js';
import { createBookingSchema } from '../createBooking.schema.js';

describe('Create a booking', () => {
  describe('When a valid body', () => {
    it('Should validate id and booking dates', () => {
      const validIdsBody = {
        body: {
          carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
          userId: 'd31210cd-ad46-40af-a3d0-a89fafd892a7',
        },
      };
      const validDatesBody = {
        body: {
          inicialDate: '2024-05-01',
          finalDate: '2024-05-07',
        },
      };
      const dateValidated = dateHandle(validDatesBody);
      expect(!!dateValidated).toBe(true);
      const bodyParsed = createBookingSchema.safeParse(validIdsBody);
      expect(bodyParsed.success).toBe(true);
    });
  });
  describe('When a valid body', () => {
    it('Should validate', () => {
      const validBody = {
        body: {
          carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
          userId: 'd31210cd-ad46-40af-a3d0-a89fafd892a7',
        },
      };
      const bodyParsed = createBookingSchema.safeParse(validBody);
      expect(bodyParsed.success).toBe(true);
    });
  });
});
