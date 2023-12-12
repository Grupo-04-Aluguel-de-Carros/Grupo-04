/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as BookingRepo from '../createBookingRepo.js';

const prismaMock = {
  booking: {
    create: jest.fn(),
  },
};

describe('Create Booking Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('When creating a booking', () => {
    it('Should create a booking sucessfully', async () => {
      const bookingData = {
        inicialDate: '2024-08-08',
        finalDate: '2024-08-13',
        carId: 1,
        userId: 1,
      };
      const createBookingResult = {
        id: 'booking-id',
        inicialDate: bookingData.inicialDate,
        finalDate: bookingData.finalDate,
        carId: bookingData.carId,
        userId: bookingData.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prismaMock.booking.create.mockResolvedValue(createBookingResult);

      const result = await BookingRepo.createBookingRepo(
        bookingData.inicialDate,
        bookingData.finalDate,
        bookingData.carId,
        bookingData.userId,
        prismaMock
      );

      expect(prismaMock.booking.create).toHaveBeenCalledWith({
        data: {
          inicialDate: bookingData.inicialDate,
          finalDate: bookingData.finalDate,
          Car: { connect: { id: bookingData.carId } },
          User: { connect: { id: bookingData.userId } },
        },
      });
      expect(result).toEqual(createBookingResult);
    });
  });
});
