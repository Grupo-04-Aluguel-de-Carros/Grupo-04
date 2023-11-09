import { boolean, object, string } from 'zod';

export const createFeatureSchema = object({
  body: object({
    massageSystem: boolean(),
    shielding: boolean(),
    sunRoof: boolean(),
    gearLever: boolean(),
    selfDriving: boolean(),
    zeroToHundred: string().trim(),
    displacement: string().trim(),
    power: string().trim(),
    velocity: string().trim(),
    carId: string().uuid()
  }),
});
