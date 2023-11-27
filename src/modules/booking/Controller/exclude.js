import { HttpStatusCode } from 'axios';
import { excludeBookingByIdService } from '../Service/excludeBookingByIdService.js';

export const exclude = async (req, res) => {
  try {
    const { id } = req.params;
    await excludeBookingByIdService(id);

    return res.status(HttpStatusCode.NoContent).end();
  } catch (error) {
    console.log('Error ==>', error);
    return res.status(error.status).json({ message: error.message });
  }
};
