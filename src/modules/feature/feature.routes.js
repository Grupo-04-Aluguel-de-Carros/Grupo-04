import { Router } from 'express';
import { create, findAll, findById, updateById } from '../feature/Controller/index.js';
import { validate } from '../../middleware/validate.js';
import { createFeatureSchema } from './Dto/createFeatureSchema.js';
import { findFeatureByIdSchema } from './Dto/findFeatureByIdSchema.js';
import { updateFeatureSchema } from './Dto/updateFeatureSchema.js';

const featureRoutes = Router();

featureRoutes.get('/', findAll);
featureRoutes.get('/:id', validate(findFeatureByIdSchema), findById);
featureRoutes.post('/', validate(createFeatureSchema), create);
featureRoutes.put("/:id", validate(updateFeatureSchema), updateById);
/*featureRoutes.delete("/:id", excludeById); */

export default featureRoutes;
