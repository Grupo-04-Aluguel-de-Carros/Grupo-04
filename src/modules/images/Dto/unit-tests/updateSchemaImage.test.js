/* eslint-disable no-undef */
import { updateSchemaImage } from '../updateSchemaImage';

describe('Update image', () => {
  describe('When a valid body', () => {
    it('Should return a valid body with only the name attribute', () => {
      const validUpdatedBody = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          name: 'Teste unitário',
        },
      };
      const updatedBody = updateSchemaImage.safeParse(validUpdatedBody);
      expect(updatedBody.success).toBe(true);
    });
    it('Should return a valid body with only the urlBrand attribute', () => {
      const validUpdatedBody = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlBrand:
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        },
      };
      const updatedBody = updateSchemaImage.safeParse(validUpdatedBody);
      expect(updatedBody.success).toBe(true);
    });
    it('Should return a valid body with only the urlCar attribute', () => {
      const validUpdatedBody = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlCar: [
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
        },
      };
      const updatedBody = updateSchemaImage.safeParse(validUpdatedBody);
      expect(updatedBody.success).toBe(true);
    });
    it('Should return a valid body with two of the attributes that can be updated', () => {
      const validUpdatedBodyandParam = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          name: 'Teste unitário',
          urlCar: [
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
        },
      };
      const updatedBody = updateSchemaImage.safeParse(validUpdatedBodyandParam);
      expect(updatedBody.success).toBe(true);
    });
  });
  describe('When an invalid body', () => {
    it('Should return an error when an id is empty', () => {
      const invalidUpdatedBodyandParam = {
        params: {
          id: '',
        },
        body: {
          name: 'Teste unitário',
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when an name is empty', () => {
      const invalidUpdatedBodyandParam = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          name: '',
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when an urlBrand is empty', () => {
      const invalidUpdatedBodyandParam = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlBrand: '',
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when an urlCar is empty', () => {
      const invalidUpdatedBodyandParam = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlCar: [''],
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when an urlCar is not an array', () => {
      const invalidUpdatedBodyandParam = {
        params: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlCar:
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when id is sent on body instead of in params', () => {
      const invalidUpdatedBodyandParam = {
        param: {
          id: undefined,
        },
        body: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
          urlCar: [
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when url its not valid', () => {
      const invalidUpdatedBodyandParam = {
        param: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlCar: [
            '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when url its not valid', () => {
      const invalidUpdatedBodyandParam = {
        param: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlBrand:
            '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
    it('Should return an error when id is sent on query', () => {
      const invalidUpdatedBodyandParam = {
        query: {
          id: '4aa5d43a-5808-4206-8093-f486d152ccb3',
        },
        body: {
          urlBrand:
            '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        },
      };
      const invalidParamandBodyParsed = updateSchemaImage.safeParse(
        invalidUpdatedBodyandParam
      );
      expect(invalidParamandBodyParsed.success).toBe(false);
    });
  });
});
