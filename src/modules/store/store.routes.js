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
import { handlePagination, validate } from '../../middleware/index.js';
import { createStoreSchema } from './Dto/createStoreSchema.js';
import { updateStoreSchema } from './Dto/updateStoreSchema.js';
import { addBrandToStoreSchema } from './Dto/addBrandToStoreSchema.js';

const storeRoutes = Router();

storeRoutes.post('/', validate(createStoreSchema), create);
storeRoutes.get('/:id', findByid);
storeRoutes.get('/', handlePagination, findMany);
storeRoutes.put('/:id', validate(updateStoreSchema), update);
storeRoutes.post('/addBrand/:id', validate(addBrandToStoreSchema), addBrand);
storeRoutes.delete('/removeBrand/:id', removeBrand);
storeRoutes.delete('/:id', exclude);

export default storeRoutes;
