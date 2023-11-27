import { HttpStatusCode } from 'axios';
import { findAllBookingService } from '../Service/findAllBookingService.js';

export const findAll = async (req, res) => {
  try {
    const bookingResult = await findAllBookingService();
    return {
      data: res.status(HttpStatusCode.Ok).json({
        allBookings: bookingResult,
      }),
    };
  } catch (error) {
    console.log('Error ==>', error);
    return res.status(error.status).json({ message: error.message });
  }
};
