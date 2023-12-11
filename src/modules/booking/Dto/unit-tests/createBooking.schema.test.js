/* eslint-disable no-undef */
import { dateHandle } from '../../../../middleware/unit-tests/dateHandleToTest.js';
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
    it('Should validate if inicialDate and finalDate are the same', () => {
      const validBody = {
        body: {
          carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
          userId: 'd31210cd-ad46-40af-a3d0-a89fafd892a7',
        },
      };
      const validDatesBody = {
        body: {
          inicialDate: '2024-09-01',
          finalDate: '2024-09-07',
        },
      };
      const dateValidated = dateHandle(validDatesBody);
      expect(!!dateValidated).toBe(true);
      const bodyParsed = createBookingSchema.safeParse(validBody);
      expect(bodyParsed.success).toBe(true);
    });
  });
  describe('When an invalid body', () => {
    it('Should not validate if carId is an invalid id', () => {
      const validBody = {
        body: {
          carId: '878a10cd-aa84-499c-b978-3797ffd81b1',
          userId: 'd31210cd-ad46-40af-a3d0-a89fafd892a7',
        },
      };
      const validDatesBody = {
        body: {
          inicialDate: '2024-09-01',
          finalDate: '2024-09-07',
        },
      };
      const dateValidated = dateHandle(validDatesBody);
      expect(!!dateValidated).toBe(true);
      const bodyParsed = createBookingSchema.safeParse(validBody);
      expect(bodyParsed.success).toBe(false);
    });
  });
  describe('When an invalid body', () => {
    it('Should not validate if userId is an invalid id', () => {
      const validBody = {
        body: {
          carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
          userId: 'd31210cd-ad46-40af-a3d0-a89fafd892',
        },
      };
      const validDatesBody = {
        body: {
          inicialDate: '2024-09-01',
          finalDate: '2024-09-08',
        },
      };
      const dateValidated = dateHandle(validDatesBody);
      expect(!!dateValidated).toBe(true);
      const bodyParsed = createBookingSchema.safeParse(validBody);
      expect(bodyParsed.success).toBe(false);
    });
  });
  describe('When an invalid body', () => {
    it('Should not validate if inicial date is not a valid date', () => {
      const validBody = {
        body: {
          carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
          userId: 'd31210cd-ad46-40af-a3d0-a89fafd892a7',
        },
      };
      const validDatesBody = {
        body: {
          inicialDate: '01-09-2024',
          finalDate: '2024-09-01',
        },
      };
      const dateValidated = dateHandle(validDatesBody);
      expect(!!dateValidated).toBe(false);
      const bodyParsed = createBookingSchema.safeParse(validBody);
      expect(bodyParsed.success).toBe(true);
    });
  });
  describe('When an invalid body', () => {
    it('Should not validate if final date is not a valid date', () => {
      const validBody = {
        body: {
          carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
          userId: 'd31210cd-ad46-40af-a3d0-a89fafd892a7',
        },
      };
      const validDatesBody = {
        body: {
          inicialDate: '2024-12-01',
          finalDate: '08-12-2024',
        },
      };
      const dateValidated = dateHandle(validDatesBody);
      expect(!!dateValidated).toBe(false);
      const bodyParsed = createBookingSchema.safeParse(validBody);
      expect(bodyParsed.success).toBe(true);
    });
  });
});
