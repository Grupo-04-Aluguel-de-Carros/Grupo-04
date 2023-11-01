import { findManyStore } from '../Service/index.js';

export const findMany = async (req, res) => {
  try {
    const result = await findManyStore();

    return res.json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
