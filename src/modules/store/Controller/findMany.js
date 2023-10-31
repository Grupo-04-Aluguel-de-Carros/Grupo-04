import { HttpStatusCode } from 'axios';
import { findManyStore } from '../Service/index.js';

export const findMany = async (req, res) => {
  try {
    const result = await findManyStore();

    return res.json(result);
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};
