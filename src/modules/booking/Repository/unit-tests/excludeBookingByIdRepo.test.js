/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as BookingRepo from '../excludeBookingByIdRepo.js';

const prismaMock = {
  booking: {
    exclude: jest.fn(),
  },
};

describe('Exclude booking repository', () => {
  it('Should exclude a booking sucefully', async () => {
    const bookingData = {
      id: 'valid-booking-id',
    };

    prismaMock.booking.delete.mockResolvedValue({ id: bookingId });

    const result = await BookingRepo.excludeBookingByIdRepo(
      bookingData,
      prismaMock
    );

    expect(prismaMock.booking.delete).toHaveBeenCalledWith({
      where: { id: bookingId },
    });
    expect(result).toEqual({ id: bookingData.id });
  });
});
