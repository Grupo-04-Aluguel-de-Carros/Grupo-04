import { Router } from 'express';
import {
  create,
  exclude,
  findById,
  findMany,
  update,
} from './Controller/index.js';
import { validate } from '../../middleware/index.js';
import { createAddressSchema } from './Dto/createAddressSchema.js';
import { updateAddressSchema } from './Dto/updateAddressSchema.js';

const addressRoutes = Router();

addressRoutes.post('/', validate(createAddressSchema), create);
addressRoutes.get('/', findMany);
addressRoutes.get('/:id', findById);
addressRoutes.put('/:id', validate(updateAddressSchema), update);
addressRoutes.delete('/:id', exclude);

export default addressRoutes;
