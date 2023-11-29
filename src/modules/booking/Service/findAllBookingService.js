import { HttpStatusCode } from 'axios';
import { findAllBookingRepo } from '../Repository/findAllBookingRepo.js';

export const findAllBookingService = async () => {
  try {
    const bookingResultFromRepo = await findAllBookingRepo();

    if (!bookingResultFromRepo.length) {
      throw {
        message: 'Nenhum registro encontrado no sistema !',
        status: HttpStatusCode.BadRequest,
      };
    }
    return bookingResultFromRepo;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
