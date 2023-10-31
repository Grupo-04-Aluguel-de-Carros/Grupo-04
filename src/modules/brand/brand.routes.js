import { Router } from 'express';
import { brandSchema } from './Dto/brandSchema.js';
import { validate } from '../../middleware/validate.js';
import {
  create,
  excludeById,
  findAll,
  findByName,
  update,
} from './Controller/index.js';
const brandRoutes = Router();

brandRoutes.get('/', findAll);
brandRoutes.get('/:name', findByName);
brandRoutes.post('/createBrand', validate(brandSchema), create);
brandRoutes.put('/updateBrand', update);
brandRoutes.delete('/deleteBrand/:id', excludeById);

export default brandRoutes;
