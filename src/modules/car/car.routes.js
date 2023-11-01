import { Router } from 'express';
import {
  create,
  exclude,
  findById,
  findMany,
  update,
} from './Controller/index.js';
import { validate } from '../../middleware/index.js';
import { createCarSchema } from './Dto/createCarSchema.js';

const carRoutes = Router();

carRoutes.post('/', validate(createCarSchema), create);
carRoutes.get('/', findMany);
carRoutes.get('/:id', findById);
carRoutes.put('/:id', update);
carRoutes.delete('/:id', exclude);

export default carRoutes;
