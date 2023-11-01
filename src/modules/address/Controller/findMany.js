import { findManyAddress } from '../Service/index.js';

export const findMany = async (req, res) => {
  try {
    const result = await findManyAddress();

    return res.json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
