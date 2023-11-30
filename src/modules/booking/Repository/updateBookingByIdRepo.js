import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateBookingByIdRepo = async bookingObject => {
  try {
    const booking = await db.booking.update({
      where: {
        id: bookingObject.id,
      },
      data: {
        inicialDate: bookingObject.inicialDateParsed,
        finalDate: bookingObject.finalDateParsed,
        carId: bookingObject.carId,
      },
    });
    return booking;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possível atualizar a reserva',
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
