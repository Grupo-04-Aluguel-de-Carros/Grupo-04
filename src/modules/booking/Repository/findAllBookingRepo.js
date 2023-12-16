import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAllBookingRepo = async pageInformations => {
  try {
    const [booking, total] = await db.$transaction([
      db.booking.findMany({
        skip: pageInformations.offset,
        take: pageInformations.listPerPage,
      }),
      db.booking.count(),
    ]);
    return { booking, total };
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possivel procurar todas as reservas',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
