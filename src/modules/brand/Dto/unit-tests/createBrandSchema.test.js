/* eslint-disable no-undef */
import { createBrandSchema } from '../createBrandSchema.js';

describe('Create brand', () => {
  describe('When a valid body', () => {
    it('Should validate a body with all atributes', () => {
      const validBody = {
        body: {
          name: 'Porsche',
        },
      };
      const validatedBody = createBrandSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(true);
    });
  });
  describe('When an invalid body', () => {
    it('Should not validate a payload without body', () => {
      const validBody = {
        name: '',
      };
      const validatedBody = createBrandSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should not validate an empty name', () => {
      const validBody = {
        body: {
          name: 'Oi',
        },
      };
      const validatedBody = createBrandSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should not validate an empty name', () => {
      const validBody = {
        body: {
          name: '',
        },
      };
      const validatedBody = createBrandSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should not validate a name sent in a query', () => {
      const validBody = {
        query: {
          name: '',
        },
      };
      const validatedBody = createBrandSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
    it('Should not validate a name sent in param', () => {
      const validBody = {
        params: {
          name: '',
        },
      };
      const validatedBody = createBrandSchema.safeParse(validBody);
      expect(validatedBody.success).toBe(false);
    });
  });
});
