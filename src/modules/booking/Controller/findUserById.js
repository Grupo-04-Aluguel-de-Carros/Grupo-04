import { HttpStatusCode } from 'axios';
import { findUserBookingByIdService } from '../Service/findUserBookingByIdService.js';

export const findUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const userBookingFromService = await findUserBookingByIdService(id);

    return res.status(HttpStatusCode.Ok).json({
      bookingsFinded: userBookingFromService.Booking,
    });
  } catch (error) {
    console.log('Error ==>', error);
    return res.status(error.status).json({ message: error.message });
  }
};
