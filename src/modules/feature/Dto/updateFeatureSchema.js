import { object, string, boolean } from 'zod';

export const updateFeatureSchema = object({
  body: object({
    massageSystem: boolean().optional(),
    shielding: boolean().optional(),
    sunRoof: boolean().optional(),
    automatic: boolean().optional(),
    selfDriving: boolean().optional(),
    zeroToHundred: string().trim().optional(),
    displacement: string().trim().optional(),
    power: string().trim().optional(),
    velocity: string().trim().optional(),
  }),
  params: object({
    id: string().uuid(),
  }),
});
