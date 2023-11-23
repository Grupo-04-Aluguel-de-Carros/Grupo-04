import { object, string, boolean } from 'zod';

export const updateFeatureSchema = object({
  body: object({
    name: string().min(5).optional(),
    massageSystem: boolean().optional(),
    shielding: boolean().optional(),
    sunRoof: boolean().optional(),
    automatic: boolean().optional(),
    selfDriving: boolean().optional(),
  }),
  params: object({
    id: string().uuid(),
  }),
});
