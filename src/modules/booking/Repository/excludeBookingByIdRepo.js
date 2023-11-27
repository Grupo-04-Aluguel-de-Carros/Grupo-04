import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const excludeBookingByIdRepo = async id => {
  try {
    const bookingExcluded = await db.booking.delete({
      where: {
        id,
      },
    });
    return bookingExcluded;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possível criar a reserva',
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
