import { Router } from 'express';
import { create, findAll, findById } from '../feature/Controller/index.js';
import { validate } from '../../middleware/validate.js';
import { createFeatureSchema } from './Dto/createFeatureSchema.js';
import { findFeatureByIdSchema } from './Dto/findFeatureByIdSchema.js';

const featureRoutes = Router();

featureRoutes.get('/', findAll);
featureRoutes.get('/:id', validate(findFeatureByIdSchema), findById);
featureRoutes.post('/', validate(createFeatureSchema), create);
/* featureRoutes.put("/:id", updateById);
featureRoutes.delete("/:id", excludeById); */

export default featureRoutes;
