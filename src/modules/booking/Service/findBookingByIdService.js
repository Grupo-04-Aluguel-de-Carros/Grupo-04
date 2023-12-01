import { HttpStatusCode } from 'axios';
import { findBookingByIdRepo } from '../Repository/findBookingByIdRepo.js';

export const findBookingByIdService = async bookingObject => {
  try {
    const bookingFound = await findBookingByIdRepo(bookingObject);

    if (!bookingFound) {
      throw {
        message: 'Nenhuma reserva encontrada !',
        status: HttpStatusCode.BadRequest,
      };
    }

    return bookingFound;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
