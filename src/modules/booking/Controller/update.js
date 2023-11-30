import { HttpStatusCode } from 'axios';
import { updateBookingByIdService } from '../Service/updateBookingByIdService.js';

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const { inicialDateParsed, finalDateParsed } = req.date;

    const { carId } = req.body;

    const bookingResult = await updateBookingByIdService({
      id,
      inicialDateParsed,
      finalDateParsed,
      carId,
    });

    return res.status(HttpStatusCode.Ok).json({
      data: bookingResult,
    });
  } catch (error) {
    console.log('Error ==>', error);
    return res.status(error.status).json({ message: error.message });
  }
};
