import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { createSchemaImage, deleteSchemaImage } from './Dto/indexDto.js';
import { create, excludeById } from './Controller/index.js';

const imageRoutes = Router();

imageRoutes.post('/', validate(createSchemaImage), create);
imageRoutes.delete('/:id', validate(deleteSchemaImage), excludeById);

export default imageRoutes;
