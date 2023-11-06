import { Router } from 'express';
import { createBrandSchema } from './Dto/createBrandSchema.js';
import { validate } from '../../middleware/validate.js';
import {
  create,
  excludeById,
  findAll,
  findByName,
  update,
} from './Controller/index.js';
const brandRoutes = Router();

brandRoutes.get('/', validate(getAllBrands), findAll);
brandRoutes.get('/:name', validate(getBrandByName), findByName);
brandRoutes.post('/', validate(createBrandSchema), create);
brandRoutes.put('/updateBrand', update);
brandRoutes.delete('/deleteBrand/:id', excludeById);

export default brandRoutes;
