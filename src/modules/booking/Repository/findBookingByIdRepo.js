import { db } from '../../../config/db.js';

export const findBookingByIdRepo = async id => {
  try {
    const booking = await db.booking.findUnique({
      where: {
        id,
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
