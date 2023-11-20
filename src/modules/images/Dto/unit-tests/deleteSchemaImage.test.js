/* eslint-disable no-undef */
import { deleteSchemaImage } from '../deleteSchemaImage.js';

describe('Delete an Image', () => {
  describe('When an invalid param', () => {
    it('Should return an error of a invalid id', () => {
      const invalidParam = {
        params: {
          id: '2a17f8eb-d502-4e3a-82f7',
        },
      };
      const imageParamParsed = deleteSchemaImage.safeParse(invalidParam);
      expect(imageParamParsed.success).toBe(false);
    });
    it('Should return an error of an empty id', () => {
      const invalidParam = {
        params: {
          id: '',
        },
      };
      const imageParamParsed = deleteSchemaImage.safeParse(invalidParam);
      expect(imageParamParsed.success).toBe(false);
    });
    it('Should return an error if id is sent in a body', () => {
      const invalidParam = {
        body: {
          id: '9bfd10f0-0336-4158-9627-e7f0e3944840',
        },
      };
      const imageParamParsed = deleteSchemaImage.safeParse(invalidParam);
      expect(imageParamParsed.success).toBe(false);
    });
    it('Should return an error if id is sent in a query', () => {
      const invalidParam = {
        query: {
          id: '9bfd10f0-0336-4158-9627-e7f0e3944840',
        },
      };
      const imageParamParsed = deleteSchemaImage.safeParse(invalidParam);
      expect(imageParamParsed.success).toBe(false);
    });
  });
  describe('When a valid param', () => {
    it('Should validate the param', () => {
      const validParam = {
        params: {
          id: '9bfd10f0-0336-4158-9627-e7f0e3944840',
        },
      };
      const imageParamParsed = deleteSchemaImage.safeParse(validParam);
      expect(imageParamParsed.success).toBe(true);
    });
  });
});
