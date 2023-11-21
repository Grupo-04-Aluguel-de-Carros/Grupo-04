import { array, object, string } from 'zod';
import { urlRegex } from '../../../utils/index.js';

export const updateSchemaImage = object({
  params: object({
    id: string().trim().uuid(),
  }),
  body: object({
    name: string().trim().min(3).optional(),
    urlBrand: string().regex(urlRegex).optional(),
    urlCar: array(string().regex(urlRegex)).optional(),
  }),
});
