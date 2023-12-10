import { validate } from '../../middleware/validate.js';
import {
  create,
  findAll,
  exclude,
  update,
  findById,
  findUserById,
} from './Controller/index.js';
import {
  createBookingSchema,
  excludeBookingSchema,
  updateBookingSchema,
  findBookingByIdSchema,
  findBookingByUserId,
} from './Dto/index.js';
import { dateHandle } from '../../middleware/dateHandle.js';
import { handlePagination } from '../../middleware/handlePagination.js';
import { Router } from 'express';
import { isAuthenticated } from '../../middleware/isAuthenticated.js';
import { hasRole } from '../../middleware/hasRole.js';

const bookingRoutes = Router();

bookingRoutes.post('/', dateHandle, validate(createBookingSchema), create);
bookingRoutes.get('/', handlePagination, findAll);
bookingRoutes.get('/:id', validate(findBookingByIdSchema), findById);
bookingRoutes.get(
  '/user/:id',
  isAuthenticated,
  hasRole(['ADMIN']),
  validate(findBookingByUserId),
  findUserById
);
bookingRoutes.delete('/:id', validate(excludeBookingSchema), exclude);
bookingRoutes.put('/:id', dateHandle, validate(updateBookingSchema), update);

export default bookingRoutes;
