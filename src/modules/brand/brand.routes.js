import { Router } from 'express';
import { createBrandSchema } from './Dto/createBrandSchema.js';
import { validate } from '../../middleware/validate.js';
import { create, excludeById, findAll, update } from './Controller/index.js';
import { getAllBrands } from './Dto/getAllBrands.js';
const brandRoutes = Router();

brandRoutes.get('/', validate(getAllBrands), findAll);
brandRoutes.post('/', validate(createBrandSchema), create);
brandRoutes.put('/:id', update);
brandRoutes.delete('/:id', excludeById);

export default brandRoutes;
