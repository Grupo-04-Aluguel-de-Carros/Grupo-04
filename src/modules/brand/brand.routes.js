import { Router } from 'express';
import { hasRole, isAuthenticated, validate } from '../../middleware/index.js';
import { create, excludeById, findAll, update } from './Controller/index.js';
import { getAllBrands, createBrandSchema } from './Dto/indexDto.js';
import { handlePagination } from '../../middleware/handlePagination.js';
const brandRoutes = Router();

brandRoutes.get('/', handlePagination, validate(getAllBrands), findAll);
brandRoutes.post(
  '/',
  isAuthenticated,
  hasRole(['ADMIN']),
  validate(createBrandSchema),
  create
);
brandRoutes.put('/:id', isAuthenticated, hasRole(['ADMIN']), update);
brandRoutes.delete('/:id', isAuthenticated, hasRole(['ADMIN']), excludeById);

export default brandRoutes;
