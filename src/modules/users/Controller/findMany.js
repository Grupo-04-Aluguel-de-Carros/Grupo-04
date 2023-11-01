import { findManyUsers } from '../Service/index.js';

export const findMany = async (req, res) => {
  try {
    const result = await findManyUsers();

    return res.json({ data: result });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
