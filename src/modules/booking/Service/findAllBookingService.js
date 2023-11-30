import { HttpStatusCode } from 'axios';
import { findAllBookingRepo } from '../Repository/findAllBookingRepo.js';

export const findAllBookingService = async pageInformations => {
  try {
    const bookingResultFromRepo = await findAllBookingRepo(pageInformations);

    if (!bookingResultFromRepo.booking.length) {
      throw {
        message: 'Nenhum registro encontrado no sistema !',
        status: HttpStatusCode.BadRequest,
      };
    }

    const totalPages = Math.ceil(
      bookingResultFromRepo.total / pageInformations.listPerPage
    );

    return { bookingResultFromRepo, totalPages };
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
