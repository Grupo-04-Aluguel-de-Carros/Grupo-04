import { array, object, string } from 'zod';
import { urlRegex } from '../../../utils/index.js';

export const createSchemaImage = object({
  body: object({
    name: string().trim().min(3),
    urlBrand: string().regex(urlRegex),
    urlCar: array(string().regex(urlRegex)).min(1),
    carId: string().trim().uuid(),
  }),
});
