/* eslint-disable no-undef */
import { createSchemaImage } from '../createSchemaImage';

describe('Create an Image', () => {
  describe('When Receive an complete Image Payload', () => {
    it('Should validate a body with all fields', () => {
      const validBodyImage = {
        body: {
          name: 'Imagem de uma Ferrari',
          urlBrand:
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          urlCar: [
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
          carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
        },
      };
      const imageBodyParsed = createSchemaImage.safeParse(validBodyImage);
      expect(imageBodyParsed.success).toBe(true);
    });
  });
  describe('When Receive a Payload without name', () => {
    it('Should return an error', () => {
      const validBodyImage = {
        body: {
          urlBrand:
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          urlCar: [
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
          carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
        },
      };
      const imageBodyParsed = createSchemaImage.safeParse(validBodyImage);
      expect(imageBodyParsed.success).toBe(false);
    });
  });
  describe('When Receive a Payload without urlBrand', () => {
    it('Should return an error', () => {
      const validBodyImage = {
        body: {
          name: 'Imagem de uma Ferrari',
          urlCar: [
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
          carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
        },
      };
      const imageBodyParsed = createSchemaImage.safeParse(validBodyImage);
      expect(imageBodyParsed.success).toBe(false);
    });
  });
  describe('When Receive a Payload without urlCar', () => {
    it('Should return an error', () => {
      const validBodyImage = {
        body: {
          name: 'Imagem de uma Ferrari',
          urlBrand:
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
        },
      };
      const imageBodyParsed = createSchemaImage.safeParse(validBodyImage);
      expect(imageBodyParsed.success).toBe(false);
    });
  });
  describe('When Receive a Payload without carId', () => {
    it('Should return an error', () => {
      const validBodyImage = {
        body: {
          name: 'Imagem de uma Ferrari',
          urlBrand:
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          urlCar: [
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
            'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          ],
        },
      };
      const imageBodyParsed = createSchemaImage.safeParse(validBodyImage);
      expect(imageBodyParsed.success).toBe(false);
    });
  });
});
