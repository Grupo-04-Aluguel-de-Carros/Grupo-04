/* eslint-disable no-undef */
import { createSchemaImage } from '../createSchemaImage';

describe('Create an Image', () => {
  describe('When an invalid body', () => {
    it('Should return an error without a body object', () => {
      const invalidBodyImage = {
        name: 'Imagem de uma Ferrari',
        urlBrand:
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        urlCar: [
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
        carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
      };
      const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
      expect(imageBodyParsed.success).toBe(false);
    });
  });

  it('Should return an error of a payload without name', () => {
    const invalidBodyImage = {
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
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });

  it('Should return an error of a payload without urlBrand', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlCar: [
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
        carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });

  it('Should return an error of a payload without urlCar', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlBrand:
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });

  it('Should return an error of a payload without carId', () => {
    const invalidBodyImage = {
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
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });

  it('Should return an error with a name with less than 3 words', () => {
    const invalidBodyImage = {
      body: {
        name: 'Oi',
        urlBrand:
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        urlCar: [
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });

  it('Should return an error of an url not valid', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlBrand:
          '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        urlCar: [
          '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
        carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });
  it('Should return an error of an empty url', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlBrand: '',
        urlCar: ['', ''],
        carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });
  it('Should return an error of urlCar outside an array', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlBrand:
          '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        urlCar:
          '//upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        carId: '2a17f8eb-d502-4e3a-82f7-83daa70a0795',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });
  it('Should return an error of an invalid uuid', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlBrand:
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        urlCar: [
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
        carId: '2a17f8eb-d502-4e3a-82f7',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });
  it('Should return an error of an empty carId', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlBrand:
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        urlCar: [
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
        carId: '',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });
  it('Should return an error of an urlBrand inside an array', () => {
    const invalidBodyImage = {
      body: {
        name: 'Imagem de uma Ferrari',
        urlBrand: [
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
        urlCar: [
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
          'https://upload.wikimedia.org/wikipedia/pt/f/fb/Logotipo_da_Scuderia_Ferrari.svg',
        ],
        carId: '',
      },
    };
    const imageBodyParsed = createSchemaImage.safeParse(invalidBodyImage);
    expect(imageBodyParsed.success).toBe(false);
  });
  describe('When a valid body', () => {
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
});
