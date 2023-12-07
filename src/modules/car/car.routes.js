import { Router } from 'express';
import {
  create,
  exclude,
  findById,
  findMany,
  update,
} from './Controller/index.js';
import {
  handlePagination,
  hasRole,
  isAuthenticated,
  validate,
} from '../../middleware/index.js';
import { createCarSchema } from './Dto/createCarSchema.js';

const carRoutes = Router();

carRoutes.post(
  '/',
  isAuthenticated,
  hasRole(['ADMIN']),
  validate(createCarSchema),
  create
);
carRoutes.get('/', handlePagination, findMany);
carRoutes.get('/:id', isAuthenticated, hasRole(['ADMIN']), findById);
carRoutes.put('/:id', isAuthenticated, hasRole(['ADMIN']), update);
carRoutes.delete('/:id', isAuthenticated, hasRole(['ADMIN']), exclude);

export default carRoutes;
