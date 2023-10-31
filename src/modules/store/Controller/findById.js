import { HttpStatusCode } from 'axios';
import { findStoreById } from '../Service/index.js';

export const findByid = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await findStoreById(id);

    return res.json(result);
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};
