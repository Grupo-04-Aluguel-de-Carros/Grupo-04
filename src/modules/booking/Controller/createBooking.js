import { HttpStatusCode } from 'axios';

export const createBooking = (req, res) => {
  res.status(HttpStatusCode.Created).json({
    data: req.body,
  });
};
