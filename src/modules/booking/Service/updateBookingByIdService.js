import { updateBookingByIdRepo } from '../Repository/updateBookingByIdRepo.js';

export const updateBookingByIdService = async bookingObject => {
  try {
    const bookingFromRepo = updateBookingByIdRepo(bookingObject);
    return bookingFromRepo;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
