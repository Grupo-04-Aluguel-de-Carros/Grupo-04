import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const excludeBookingByIdRepo = async bookingObject => {
  try {
    const bookingExcluded = await db.booking.delete({
      where: {
        id: bookingObject.id,
      },
    });
    return bookingExcluded;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possível excluir a reserva',
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
