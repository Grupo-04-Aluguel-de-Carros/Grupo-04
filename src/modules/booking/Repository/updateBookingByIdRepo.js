import { db } from '../../../config/db.js';

export const updateBookingByIdRepo = async bookingObject => {
  console.log(bookingObject);
  try {
    const booking = db.booking.update({
      where: {
        id: bookingObject.id,
      },
      data: {
        inicialDate: bookingObject.inicialDateParsed,
        finalDate: bookingObject.finalDateParsed,
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
