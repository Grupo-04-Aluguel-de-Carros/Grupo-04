import { array, boolean, object, string } from 'zod';

export const createFeatureSchema = object({
  body: object({
    massageSystem: boolean(),
    shielding: boolean(),
    sunRoof: boolean(),
    automatic: boolean(),
    selfDriving: boolean(),
    carId: array(string()),
  }),
});
