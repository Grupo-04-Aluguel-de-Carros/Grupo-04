import { Router } from 'express';
import {
  create,
  excludeById,
  findAllCategories,
  findCategoryByQualification,
  update,
} from './Controller/index.js';

const categoryRoutes = Router();

categoryRoutes.get('/', findAllCategories);
categoryRoutes.get('/findSpecific/:qualification', findCategoryByQualification);
categoryRoutes.put('/:id', update);
categoryRoutes.post('/createCategory', create);
categoryRoutes.delete('/:id', excludeById);

export default categoryRoutes;
