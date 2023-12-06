import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findUserBookingByIdRepo = async id => {
  try {
    const userBookingFindedById = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        Booking: {
          select: {
            id: true,
            inicialDate: true,
            finalDate: true,
            carId: true,
            Car: { select: { name: true } },
          },
        },
      },
    });
    return userBookingFindedById;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possível criar a reserva',
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};