import { Router } from 'express';
import {
  create,
  excludeById,
  findAllCategories,
  findCategoryByName,
  update,
} from './Controller/index.js';
import { categorySchema } from './Dto/categorySchema.js';
import { validate } from '../../middleware/validate.js';

const categoryRoutes = Router();

categoryRoutes.get('/', findAllCategories);
categoryRoutes.get('/findSpecific/:name', findCategoryByName);
categoryRoutes.put('/:id', update);
categoryRoutes.post('/createCategory', validate(categorySchema), create);
categoryRoutes.delete('/:id', excludeById);

export default categoryRoutes;
