import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findBookingByCarIdRepo = async bookingObject => {
  try {
    const bookings = await db.booking.findMany({
      where: {
        carId: bookingObject.carId,
      },
      select: {
        id: true,
        inicialDate: true,
        finalDate: true,
        carId: true,
        createdAt: true,
      },
    });
    return bookings;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possível criar a reserva',
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
