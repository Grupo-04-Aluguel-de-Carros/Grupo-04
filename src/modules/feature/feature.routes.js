import { Router } from 'express';
import { create, findAll } from '../feature/Controller/index.js';
import { validate } from '../../middleware/validate.js';
import { createFeatureSchema } from './Dto/createFeatureSchema.js';

const featureRoutes = Router();

featureRoutes.get('/', findAll);
/* featureRoutes.get("/:id", findById); */
featureRoutes.post('/', validate(createFeatureSchema), create);
/* featureRoutes.put("/:id", updateById);
featureRoutes.delete("/:id", excludeById); */

export default featureRoutes;
