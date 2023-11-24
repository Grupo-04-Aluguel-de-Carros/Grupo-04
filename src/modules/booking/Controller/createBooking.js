import { HttpStatusCode } from 'axios';
import { createBookingService } from '../Service/createBookingService.js';

export const createBooking = async (req, res) => {
  try {
    const { inicialDateParsed, finalDateParsed } = req.date;
    const { carId, userId } = req.body;
    const bookingResult = await createBookingService({
      inicialDateParsed,
      finalDateParsed,
      carId,
      userId,
    });
    res.status(HttpStatusCode.Created).json({
      data: bookingResult,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
