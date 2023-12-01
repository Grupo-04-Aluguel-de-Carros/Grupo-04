import { HttpStatusCode } from 'axios';
import { findBookingByIdService } from '../Service/findBookingByIdService.js';

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const bookingFound = await findBookingByIdService({id});

    return res.status(HttpStatusCode.Ok).json({
      message: bookingFound,
    });
  } catch (error) {
    console.log('Error ==>', error);
    return res.status(error.status).json({ message: error.message });
  }
};
