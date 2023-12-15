import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const excludeBookingByIdRepo = async (bookingObject, dbClient = db) => {
  try {
    const bookingExcluded = await dbClient.booking.delete({
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
