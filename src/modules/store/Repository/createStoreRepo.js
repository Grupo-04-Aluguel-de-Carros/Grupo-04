import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createStoreRepo = name => {
  try {
    return db.store.create({
      data: {
        name,
      },
    });
  } catch (error) {
    throw new Error('Não foi possivel criar a loja', HttpStatusCode.BadRequest);
  }
};
