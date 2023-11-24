import { validate } from '../../middleware/validate.js';
import { createBooking } from './Controller/index.js';
import { createBookingSchema } from './Dto/index.js';
import { dateValidation } from '../../middleware/dateHandle.js';

import { Router } from 'express';

const bookingRoutes = Router();

bookingRoutes.post(
  '/',
  dateValidation,
  validate(createBookingSchema),
  createBooking
);

export default bookingRoutes;
