import { Router } from 'express';
import { brandSchema } from './Dto/brandSchema.js';
import { validate } from '../../middleware/validate.js';
import { create } from './Controller/create.js';
import { excludeById } from './Controller/excludeById.js';
import { findAll } from './Controller/findAll.js';
import { findByName } from './Controller/findByName.js';
const brandRoutes = Router();

brandRoutes.get('/', findAll);
brandRoutes.get('/:name', findByName);
brandRoutes.post('/createBrand', validate(brandSchema), create);
brandRoutes.put('/updateBrand/:id' /* updateById */);
brandRoutes.delete('/deleteBrand/:id', excludeById);

export default brandRoutes;
