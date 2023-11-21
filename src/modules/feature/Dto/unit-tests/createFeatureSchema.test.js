/* eslint-disable no-undef */
import {createFeatureSchema} from '../createFeatureSchema.js';

describe('Create feature', () => {
    describe('When a valid body', () => {
        it('Should validate the payload', () => {
            const validBody = {
                body: {
                    name: "Carro de luxo nivel deluxe Test 9",
                    massageSystem: true,
                    shielding: true,
                    sunRoof: true,
                    automatic: true,
                    selfDriving: false,
                    carId: ["08cf7f6f-3659-4b07-a156-b386c4114613", "08cf7f6f-3659-4b07-a156-b386c4114612"]
                }
            }
            const validatedBody = createFeatureSchema.safeParse(validBody);
            expect(validatedBody.success).toBe(true)
        })
    })
})