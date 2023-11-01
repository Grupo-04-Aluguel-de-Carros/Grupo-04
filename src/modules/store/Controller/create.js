import { HttpStatusCode } from 'axios';
import { createStore } from '../Service/index.js';

export const create = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await createStore(name);

    return res.status(HttpStatusCode.Created).json({ message: result });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
