import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { create, excludeById, findAll, update } from './Controller/index.js';
import { getAllBrands, createBrandSchema } from './Dto/indexDto.js';
import { handlePagination } from '../../middleware/handlePagination.js';
const brandRoutes = Router();

brandRoutes.get('/', handlePagination, validate(getAllBrands), findAll);
brandRoutes.post('/', validate(createBrandSchema), create);
brandRoutes.put('/:id', update);
brandRoutes.delete('/:id', excludeById);

export default brandRoutes;
