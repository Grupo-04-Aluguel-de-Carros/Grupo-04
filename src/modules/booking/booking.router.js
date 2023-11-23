import { validate } from '../../middleware/validate.js';
import { createBooking } from './Controller/index.js';
import { createBookingSchema } from './Dto/index.js';

import { Router } from 'express';

const bookingRoutes = Router();

bookingRoutes.post('/', validate(createBookingSchema), createBooking);

export default bookingRoutes;
