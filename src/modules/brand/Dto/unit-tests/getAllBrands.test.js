/* eslint-disable no-undef */
import { getAllBrands } from '../getAllBrands.js';

describe('Create a brand', () => {
  describe('When a valid query', () => {
    it('Should return a validated query passing a name', () => {
      const validQuery = {
        query: {
          name: 'Porsche',
          page: undefined,
          limit: undefined,
        },
      };
      const validatedQueryParsed = getAllBrands.safeParse(validQuery);
      expect(validatedQueryParsed.success).toBe(true);
    });
    it('Should return a validated query not passing a name', () => {
      const validQuery = {
        query: {
          name: undefined,
          page: undefined,
          limit: undefined,
        },
      };
      const validatedQueryParsed = getAllBrands.safeParse(validQuery);
      expect(validatedQueryParsed.success).toBe(true);
    });
    it('Should return a validated query just passing the limit', () => {
      const validQuery = {
        query: {
          name: undefined,
          limit: 2,
        },
      };
      const validatedQueryParsed = getAllBrands.safeParse(validQuery);
      expect(validatedQueryParsed.success).toBe(true);
    });
    it('Should return a validated query just passing the page', () => {
      const validQuery = {
        query: {
          name: undefined,
          page: 2,
        },
      };
      const validatedQueryParsed = getAllBrands.safeParse(validQuery);
      expect(validatedQueryParsed.success).toBe(true);
    });
    it('Should return a validated query just passing all informations on page 1', () => {
      const validQuery = {
        query: {
          name: 'porsche',
          page: 1,
          limit: 1,
        },
      };
      const validatedQueryParsed = getAllBrands.safeParse(validQuery);
      expect(validatedQueryParsed.success).toBe(true);
    });
  });
  describe('When an invalid query', () => {
    it('Should return an invalid query when passing all informations on body', () => {
      const invalidQuery = {
        body: {
          name: 'porsche',
          limit: 1,
          page: 1,
        },
      };
      const invalidQueryParsed = getAllBrands.safeParse(invalidQuery);
      expect(invalidQueryParsed.success).toBe(false);
    });
    it('Should return an invalid query when passing all informations on params', () => {
      const invalidQuery = {
        params: {
          name: 'porsche',
          limit: 1,
          page: 1,
        },
      };
      const invalidQueryParsed = getAllBrands.safeParse(invalidQuery);
      expect(invalidQueryParsed.success).toBe(false);
    });
    it('Should return an invalid query when passing an empty brand name', () => {
      const invalidQuery = {
        params: {
          name: '',
        },
      };
      const invalidQueryParsed = getAllBrands.safeParse(invalidQuery);
      expect(invalidQueryParsed.success).toBe(false);
    });
  });
  describe('When an invalid query', () => {
    it('Should return an invalid query when passing all informations on body', () => {
      const invalidQuery = {
        body: {
          name: 'porsche',
          limit: 1,
          page: 1,
        },
      };
      const invalidQueryParsed = getAllBrands.safeParse(invalidQuery);
      expect(invalidQueryParsed.success).toBe(false);
    });
    it('Should return an invalid query when passing all informations on params', () => {
      const invalidQuery = {
        params: {
          name: 'porsche',
          limit: 1,
          page: 1,
        },
      };
      const invalidQueryParsed = getAllBrands.safeParse(invalidQuery);
      expect(invalidQueryParsed.success).toBe(false);
    });
    it('Should return an invalid query when passing an empty brand name', () => {
      const invalidQuery = {
        params: {
          name: '',
        },
      };
      const invalidQueryParsed = getAllBrands.safeParse(invalidQuery);
      expect(invalidQueryParsed.success).toBe(false);
    });
  });
});
