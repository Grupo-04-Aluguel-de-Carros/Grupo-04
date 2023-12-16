import { Router } from 'express';
import { exclude, findById, findMany, update } from './Controller/index.js';
import { hasRole, isAuthenticated, validate } from '../../middleware/index.js';
import { updateUserSchema } from './Dto/updateUserSchema.js';
import { handlePagination } from '../../middleware/handlePagination.js';

const userRoutes = Router();

userRoutes.get('/', handlePagination, findMany);
userRoutes.get(
  '/:id',
  isAuthenticated,
  hasRole(['CLIENT']),
  isAuthenticated,
  findById
);
userRoutes.put(
  '/:id',
  isAuthenticated,
  hasRole(['CLIENT']),
  validate(updateUserSchema),
  update
);
userRoutes.delete('/delete/:id', isAuthenticated, hasRole(['CLIENT']), exclude);

export default userRoutes;
