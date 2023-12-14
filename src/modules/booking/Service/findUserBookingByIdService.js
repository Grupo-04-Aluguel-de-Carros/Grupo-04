import { HttpStatusCode } from 'axios';
import { findUserBookingByIdRepo } from '../Repository/findUserBookingByIdRepo.js';

export const findUserBookingByIdService = async id => {
  try {
    const userBookingFromRepo = await findUserBookingByIdRepo(id);
    if (!userBookingFromRepo) {
      throw {
        message: 'Usuario sem reserva ou id inexistente',
        status: HttpStatusCode.BadRequest,
      };
    }
    return userBookingFromRepo;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
