/* eslint-disable no-undef */
// import { jest } from 'jest';
import { addBrandToStoreSchema } from '../addBrandToStoreSchema';

describe.only('register brand to store schema', () => {
  describe('when a valid body', () => {
    test('should validates a body with all fields', () => {
      const validInput = {
        body: {
          brands: ['e781a102-c966-4151-91f8-f402236ac65d'],
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = addBrandToStoreSchema.safeParse(validInput);
      expect(schema.success).toBe(true);
    });
  });

  describe('when an invalid body', () => {
    it('should return an error for a body without "params"', () => {
      const invalidInput = {
        body: {
          brands: ['e781a102-c966-4151-91f8-f402236ac65d'],
        },
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params without "id"', () => {
      const invalidInput = {
        body: {
          brands: ['e781a102-c966-4151-91f8-f402236ac65d'],
        },
        params: {},
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params where "id" is a number', () => {
      const invalidInput = {
        body: {
          brands: ['e781a102-c966-4151-91f8-f402236ac65d'],
        },
        params: { id: 1 },
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a params where "id" is an array', () => {
      const invalidInput = {
        body: {
          brands: ['e781a102-c966-4151-91f8-f402236ac65d'],
        },
        params: { id: [1] },
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "brands" is a string', () => {
      const invalidInput = {
        body: {
          brands: 'e781a102-c966-4151-91f8-f402236ac65d',
        },
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected array, received string'
        );
      }
    });

    it('should return an error for a body where "brands" is a number', () => {
      const invalidInput = {
        body: {
          brands: 1,
        },
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected array, received number'
        );
      }
    });

    it('should return an error for a body where "brands" is an array of number', () => {
      const invalidInput = {
        body: {
          brands: [1],
        },
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body without "body"', () => {
      const invalidInput = {
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = addBrandToStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });
  });
});
