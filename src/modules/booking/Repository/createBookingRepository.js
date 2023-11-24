import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createBookingRepository = async bookingDates => {
  try {
    const booking = await db.booking.create({
      data: {
        inicialDate: bookingDates.inicialDateParsed,
        finalDate: bookingDates.finalDateParsed,
        carId: bookingDates.carId,
        userId: bookingDates.userId,
      },
    });
    return booking;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
