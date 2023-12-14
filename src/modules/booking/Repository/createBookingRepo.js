import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createBookingRepo = async bookingObject => {
  try {
    const booking = await db.booking.create({
      data: {
        inicialDate: bookingObject.inicialDateParsed,
        finalDate: bookingObject.finalDateParsed,
        carId: bookingObject.carId,
        userId: bookingObject.userId,
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
