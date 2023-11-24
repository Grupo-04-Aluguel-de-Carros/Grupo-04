import { createBookingRepository } from '../Repository/createBookingRepository.js';
import { HttpStatusCode } from 'axios';

export const createBookingService = async bookingPages => {
  try {
    const bookingFromRepo = createBookingRepository(bookingPages);
    if (!bookingFromRepo) {
      throw {
        message: 'Erro ao tratar os dados',
        status: HttpStatusCode.BadRequest,
      };
    }
    return bookingFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
