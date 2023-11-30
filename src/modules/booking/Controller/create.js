import { HttpStatusCode } from 'axios';
import { createBookingService } from '../Service/createBookingService.js';

export const create = async (req, res) => {
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
      booking: bookingResult.booking,
      carAvailable: bookingResult.car.available,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
