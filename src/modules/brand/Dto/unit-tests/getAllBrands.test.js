/* eslint-disable no-undef */
import { getAllBrands } from '../getAllBrands.js';

describe('Create a brand', () => {
  describe('When a valid query', () => {
    it('Should return a validated query', () => {
      const validQuery = {
        query: {
          name: 'Borio',
        },
      };
      const validatedQuery = getAllBrands.safeParse(validQuery);
      expect(validatedQuery.success).toBe(true);
    });
  });
});
