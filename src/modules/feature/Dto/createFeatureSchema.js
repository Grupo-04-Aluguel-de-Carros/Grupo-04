import { array, boolean, object, string } from 'zod';

export const createFeatureSchema = object({
  body: object({
    massageSystem: boolean(),
    shielding: boolean(),
    sunRoof: boolean(),
    automatic: boolean(),
    selfDriving: boolean(),
    zeroToHundred: string().trim(),
    displacement: string().trim(),
    power: string().trim(),
    velocity: string().trim(),
    carId: array(string()),
  }),
});
