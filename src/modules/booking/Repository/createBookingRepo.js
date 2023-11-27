import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createBookingRepo = async bookingDates => {
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
      message: 'Não foi possível criar a reserva',
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
