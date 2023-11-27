import { findAllBookingRepo } from '../Repository/findAllBookingRepo.js';

export const findAllBookingService = async () => {
  try {
    const bookingResultFromRepo = findAllBookingRepo();
    return bookingResultFromRepo;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
