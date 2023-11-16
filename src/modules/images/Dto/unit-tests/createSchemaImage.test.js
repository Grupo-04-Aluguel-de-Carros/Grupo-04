import { object } from 'zod';
import { createSchemaImage } from '../indexDto.js';

test(
  it('should receive an object when a payload is sended', () => {
    const createSchema = createSchemaImage;
    expect(createSchema.optional.toBe(object));
  })
);
