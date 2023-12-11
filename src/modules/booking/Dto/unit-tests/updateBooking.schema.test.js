/* eslint-disable no-undef */
import { updateBookingSchema } from '../updateBooking.schema.js';
import { dateHandle } from '../../../../middleware/unit-tests/dateHandleToTest.js';

describe('When a valid booking', () => {
  it('Should update a booking with all valid informations', () => {
    const updatedBooking = {
      body: {
        carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
      },
      params: {
        id: '878a10cd-aa84-499c-b978-3797ffd81b06',
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
    const bookingUpdated = updateBookingSchema.safeParse(updatedBooking);
    expect(bookingUpdated.success).toBe(true);
  });
  it('Should update a booking without the dates', () => {
    const updatedBooking = {
      body: {
        carId: '878a10cd-aa84-499c-b978-3797ffd81b06',
      },
      params: {
        id: '878a10cd-aa84-499c-b978-3797ffd81b06',
      },
    };
    const bookingUpdated = updateBookingSchema.safeParse(updatedBooking);
    expect(bookingUpdated.success).toBe(true);
  });
  it('Should update a booking without the ids', () => {
    const validDatesBody = {
      body: {
        inicialDate: '2024-05-01',
        finalDate: '2024-05-07',
      },
    };
    const dateValidated = dateHandle(validDatesBody);
    expect(!!dateValidated).toBe(true);
  });
});
