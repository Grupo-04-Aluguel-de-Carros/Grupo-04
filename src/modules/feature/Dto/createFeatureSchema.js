import { array, boolean, object, string } from 'zod';

export const createFeatureSchema = object({
  body: object({
    name: string()
      .min(5, 'É necessário pelo menos 5 caracteres no campo name')
      .trim(),
    massageSystem: boolean(),
    shielding: boolean(),
    sunRoof: boolean(),
    automatic: boolean(),
    selfDriving: boolean(),
    carId: array(string()),
  }),
});
