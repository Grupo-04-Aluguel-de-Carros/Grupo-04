import { HttpStatusCode } from 'axios';
import { excludeBookingByIdRepo } from '../Repository/excludeBookingByIdRepo.js';
import { findBookingByIdRepo } from '../Repository/findBookingByIdRepo.js';

export const excludeBookingByIdService = async bookingObject => {
  try {
    const bookingById = await findBookingByIdRepo(bookingObject);

    if (!bookingById) {
      throw {
        message: 'Reserva não existe ou já foi excluida',
        status: HttpStatusCode.BadRequest,
      };
    }

    const bookingExcludedRepo = await excludeBookingByIdRepo(bookingObject);
    return bookingExcludedRepo;
  } catch (error) {
    console.log('Error ', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
