import { Router } from 'express';
import {
  create,
  findAll,
  findById,
  updateById,
  excludeById,
} from '../feature/Controller/index.js';
import { validate } from '../../middleware/validate.js';
import {
  createFeatureSchema,
  findFeatureByIdSchema,
  updateFeatureSchema,
  excluseFeatureSchema,
  findAllFeaturesSchema,
} from './Dto/indexDto.js';

const featureRoutes = Router();

featureRoutes.get('/', validate(findAllFeaturesSchema), findAll);
featureRoutes.get('/:id', validate(findFeatureByIdSchema), findById);
featureRoutes.post('/', validate(createFeatureSchema), create);
featureRoutes.put('/:id', validate(updateFeatureSchema), updateById);
featureRoutes.delete('/:id', validate(excluseFeatureSchema), excludeById);

export default featureRoutes;
