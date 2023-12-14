import { Router } from 'express';
import {
  addBrand,
  create,
  exclude,
  findByid,
  findMany,
  removeBrand,
  update,
} from './Controller/index.js';
import {
  handlePagination,
  hasRole,
  isAuthenticated,
  validate,
} from '../../middleware/index.js';
import { createStoreSchema } from './Dto/createStoreSchema.js';
import { updateStoreSchema } from './Dto/updateStoreSchema.js';
import { addBrandToStoreSchema } from './Dto/addBrandToStoreSchema.js';

const storeRoutes = Router();

storeRoutes.post(
  '/',
  isAuthenticated,
  hasRole(['ADMIN']),
  validate(createStoreSchema),
  create
);
storeRoutes.get('/:id', findByid);
storeRoutes.get('/', handlePagination, findMany);
storeRoutes.put(
  '/:id',
  isAuthenticated,
  hasRole(['ADMIN']),
  validate(updateStoreSchema),
  update
);
storeRoutes.post(
  '/addBrand/:id',
  isAuthenticated,
  hasRole(['ADMIN']),
  validate(addBrandToStoreSchema),
  addBrand
);
storeRoutes.delete(
  '/removeBrand/:id',
  isAuthenticated,
  hasRole(['ADMIN']),
  removeBrand
);
storeRoutes.delete('/:id', isAuthenticated, hasRole(['ADMIN']), exclude);

export default storeRoutes;
