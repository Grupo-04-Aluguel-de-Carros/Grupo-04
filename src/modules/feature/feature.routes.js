import { Router } from 'express';
import { create } from '../feature/Controller/create.js';
import { validate } from '../../middleware/validate.js';
import { createFeatureSchema } from './Dto/createFeatureSchema.js';

const featureRoutes = Router();

/* featureRoutes.get("/", findAll);
featureRoutes.get("/", findById); */
featureRoutes.post('/', validate(createFeatureSchema), create);
/* featureRoutes.put("/", updateById);
featureRoutes.delete("/", excludeById); */

export default featureRoutes;
