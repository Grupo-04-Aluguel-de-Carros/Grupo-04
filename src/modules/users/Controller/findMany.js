import { HttpStatusCode } from 'axios';
import { findManyUsers } from '../Service/index.js';

export const findMany = async (req, res) => {
  try {
    const result = await findManyUsers();

    return res.json({ data: result });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};
