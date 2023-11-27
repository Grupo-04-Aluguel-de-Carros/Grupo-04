import { excludeBookingByIdRepo } from '../Repository/excludeBookingByIdRepo.js';

export const excludeBookingByIdService = async id => {
  try {
    const bookingExcludedRepo = await excludeBookingByIdRepo(id);
    return bookingExcludedRepo;
  } catch (error) {
    console.log('Error ', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
