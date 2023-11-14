import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { createSchemaImage } from './Dto/createSchemaImage.js';
import { create } from './Controller/index.js';

const imageRoutes = Router();

imageRoutes.post('/', validate(createSchemaImage), create);

export default imageRoutes;
