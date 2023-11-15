import { object, string } from 'zod';

export const createSchemaImage = object({
  body: object({
    name: string().min(3).trim(),
    urlBrand: string(),
    urlCar: string(),
    carId: string().uuid().trim(),
  }),
});
