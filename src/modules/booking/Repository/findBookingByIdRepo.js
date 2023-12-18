import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findBookingByIdRepo = async bookingObject => {
  try {
    const booking = await db.booking.findUnique({
      where: {
        id: bookingObject.id,
      },
      select: {
        inicialDate: true,
        finalDate: true,
        carId: true,
        userId: true,
        User: { select: { name: true } },
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
