import { object, string } from 'zod';

export const createSchemaImage = object({
  body: object({
    title: string().min(3).trim(),
    urlBrand: string(),
    urlCar: string(),
    carId: string().uuid().trim(),
  }),
});
