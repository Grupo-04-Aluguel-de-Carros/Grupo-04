import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAllBookingRepo = async () => {
  try {
    const booking = await db.booking.findMany();
    return booking;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possivel procurar todas as reservas',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
