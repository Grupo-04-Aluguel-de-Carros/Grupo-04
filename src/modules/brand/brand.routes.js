import { Router } from 'express';
import { brandSchema } from './Dto/brandSchema.js';
import { validate } from '../../middleware/validate.js';
import { create } from './Controller/create.js';
const brandRoutes = Router();

brandRoutes.get('/' /* findAll */);
brandRoutes.get('/:name' /* getByName */);
brandRoutes.post('/createBrand',validate(brandSchema) ,create);
brandRoutes.put('/updateBrand/:id' /* updateById */);
brandRoutes.delete('/deleteBrand/:id' /* deleteById */);

export default brandRoutes;
 