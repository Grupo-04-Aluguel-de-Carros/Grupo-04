import { validate } from '../../middleware/validate.js';
import { create, findAll, exclude, update } from './Controller/index.js';
import {
  createBookingSchema,
  excludeBookingSchema,
  updateBookingSchema,
} from './Dto/index.js';
import { dateValidation } from '../../middleware/dateHandle.js';
import { handlePagination } from '../../middleware/handlePagination.js';
import { Router } from 'express';

const bookingRoutes = Router();

bookingRoutes.post('/', dateValidation, validate(createBookingSchema), create);
bookingRoutes.get('/', handlePagination, findAll);
bookingRoutes.delete('/:id', validate(excludeBookingSchema), exclude);
bookingRoutes.put(
  '/:id',
  dateValidation,
  validate(updateBookingSchema),
  update
);

export default bookingRoutes;
