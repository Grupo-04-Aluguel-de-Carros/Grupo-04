import { findCarById } from '../Service/index.js';

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findCarById(id);

    return res.json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
