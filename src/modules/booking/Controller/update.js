import { HttpStatusCode } from 'axios';
import { updateBookingByIdService } from '../Service/updateBookingByIdService.js';

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const { inicialDateParsed, finalDateParsed } = req.date;

    const bookingResult = await updateBookingByIdService({
      id,
      inicialDateParsed,
      finalDateParsed,
    });

    return res.status(HttpStatusCode.Ok).json({
      data: bookingResult,
    });
  } catch (error) {
    console.log('Error ==>', error);
    return res.status(error.status).json({ message: error.message });
  }
};
