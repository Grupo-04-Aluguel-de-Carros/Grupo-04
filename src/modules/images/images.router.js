import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import {
  createSchemaImage,
  deleteSchemaImage,
  findSchemaImageById,
  updateSchemaImage,
} from './Dto/indexDto.js';
import {
  create,
  excludeById,
  findAllImages,
  findImagesById,
  updateById,
} from './Controller/index.js';
import { handlePagination } from '../../middleware/handlePagination.js';

const imageRoutes = Router();

imageRoutes.post('/', validate(createSchemaImage), create);
imageRoutes.delete('/:id', validate(deleteSchemaImage), excludeById);
imageRoutes.get('/', handlePagination, findAllImages);
imageRoutes.get('/:id', validate(findSchemaImageById), findImagesById);
imageRoutes.put('/:id', validate(updateSchemaImage), updateById);

export default imageRoutes;
