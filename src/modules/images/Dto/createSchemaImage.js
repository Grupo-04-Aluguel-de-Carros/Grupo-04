import { object, string } from 'zod';
import { urlRegex } from '../../../utils/index.js';

export const createSchemaImage = object({
  body: object({
    name: string().min(3).trim(),
    urlBrand: string().regex(urlRegex),
    urlCar: string().regex(urlRegex),
    carId: string().uuid().trim(),
  }),
});
