/* eslint-disable no-undef */
import { findSchemaImageById } from '../findSchemaImageById.js';

describe('Find image', () => {
  describe('When an invalid param', () => {
    it('Should return an error with an empty id', () => {
      const invalidImageParam = {
        params: {
          id: '',
        },
      };
      const imageParamParsed = findSchemaImageById.safeParse(invalidImageParam);
      expect(imageParamParsed.success).toBe(false);
    });
    it('Should return an error with an invalid uuid', () => {
      const invalidImageParam = {
        params: {
          id: '7796b6df-a20d-4a06-9abd',
        },
      };
      const imageParamParsed = findSchemaImageById.safeParse(invalidImageParam);
      expect(imageParamParsed.success).toBe(false);
    });
    it('Should return an error if id is sent in a query', () => {
      const invalidImageParam = {
        query: {
          id: '7796b6df-a20d-4a06-9abd-27bccbdee150',
        },
      };
      const imageParamParsed = findSchemaImageById.safeParse(invalidImageParam);
      expect(imageParamParsed.success).toBe(false);
    });
    it('Should return an error if id is sent in a body', () => {
      const invalidImageParam = {
        body: {
          id: '7796b6df-a20d-4a06-9abd-27bccbdee150',
        },
      };
      const imageParamParsed = findSchemaImageById.safeParse(invalidImageParam);
      expect(imageParamParsed.success).toBe(false);
    });
  });

  describe('When a valid param', () => {
    it('Should return a param validated', () => {
      const validImageParam = {
        params: {
          id: '7796b6df-a20d-4a06-9abd-27bccbdee150',
        },
      };
      const imageParamParsed = findSchemaImageById.safeParse(validImageParam);
      expect(imageParamParsed.success).toBe(true);
    });
  });
});
