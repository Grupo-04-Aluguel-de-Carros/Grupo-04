import { findUserById } from '../Service/index.js';

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findUserById(id);

    return res.json({ message: result });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
