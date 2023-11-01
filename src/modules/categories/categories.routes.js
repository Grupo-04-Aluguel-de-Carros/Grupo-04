import { Router } from 'express';
import {
  create,
  excludeById,
  findAllCategories,
  findCategoryByName,
  update,
} from './Controller/index.js';
import { createCategorySchema } from './Dto/createCategorySchema.js';
import { validate } from '../../middleware/validate.js';
import { updateCategorySchema } from './Dto/updateCategorySchema.js';

const categoryRoutes = Router();

categoryRoutes.get('/', findAllCategories);
categoryRoutes.get('/findSpecific/:name', findCategoryByName);
categoryRoutes.put('/:id', validate(updateCategorySchema), update);
categoryRoutes.post('/createCategory', validate(createCategorySchema), create);
categoryRoutes.delete('/:id', excludeById);

export default categoryRoutes;
