import { boolean, object, string } from 'zod';

export const createFeatureSchema = object({
  body: object({
    massageSystem: boolean(),
    shielding: boolean(),
    sunRoof: boolean(),
    gearLever: boolean(),
    selfDriving: boolean(),
    zeroToHundred: string(),
    displacement: string(),
    power: string(),
    velocity: boolean(),
  }),
});
