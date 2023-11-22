/* eslint-disable no-undef */
import { createFeatureSchema } from '../createFeatureSchema.js';

describe('Create feature', () => {
  describe('When a valid body', () => {
    it('Should validate the payload with all body atributes', () => {
      const validBody = {
        body: {
          name: 'Carro de luxo deluxe ',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(true);
    });
  });
  describe('When an invalid body', () => {
    it('Should return an error when a payload is passed inside a param', () => {
      const validBody = {
        params: {
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a payload is passed inside a query', () => {
      const validBody = {
        query: {
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a payload is not passed inside a body', () => {
      const validBody = {
        massageSystem: true,
        shielding: true,
        sunRoof: true,
        automatic: true,
        selfDriving: false,
        carId: [
          '08cf7f6f-3659-4b07-a156-b386c4114613',
          '08cf7f6f-3659-4b07-a156-b386c4114612',
        ],
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed with a name with less than 5 characters', () => {
      const validBody = {
        body: {
          name: 'Test',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when boolean values are passed inside a string', () => {
      const validBody = {
        body: {
          name: 'Porsche',
          massageSystem: 'true',
          shielding: 'true',
          sunRoof: 'true',
          automatic: 'true',
          selfDriving: 'false',
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when carId is not an array', () => {
      const validBody = {
        body: {
          name: 'Porsche',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: '08cf7f6f-3659-4b07-a156-b386c4114613',
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when carId is not an array of uuids', () => {
      const validBody = {
        body: {
          name: 'Porsche',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when carId is an empty array', () => {
      const validBody = {
        body: {
          name: 'Porsche',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [''],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed without the name attribute', () => {
      const validBody = {
        body: {
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed without the massageSystem attribute', () => {
      const validBody = {
        body: {
          name: 'Carro de luxo deluxe ',
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed without the shielding attribute', () => {
      const validBody = {
        body: {
          name: 'Carro de luxo deluxe ',
          massageSystem: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed without the sunRoof attribute', () => {
      const validBody = {
        body: {
          name: 'Carro de luxo deluxe ',
          massageSystem: true,
          shielding: true,
          automatic: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed without the automatic attribute', () => {
      const validBody = {
        body: {
          name: 'Carro de luxo deluxe ',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          selfDriving: false,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed without the selfDriving attribute', () => {
      const validBody = {
        body: {
          name: 'Carro de luxo deluxe ',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          carId: [
            '08cf7f6f-3659-4b07-a156-b386c4114613',
            '08cf7f6f-3659-4b07-a156-b386c4114612',
          ],
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when a body is passed without the carId attribute', () => {
      const validBody = {
        body: {
          name: 'Carro de luxo deluxe ',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should return an error when name attribute is empty', () => {
      const validBody = {
        body: {
          name: '',
          massageSystem: true,
          shielding: true,
          sunRoof: true,
          automatic: true,
          selfDriving: false,
        },
      };
      const validatedBody = createFeatureSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
  });
});
