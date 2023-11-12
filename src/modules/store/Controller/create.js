import { HttpStatusCode } from 'axios';
import { createStore } from '../Service/index.js';

export const create = async (req, res) => {
  try {
    const { name, brands } = req.body;
    const result = await createStore({ name, brands });

    return res.status(HttpStatusCode.Created).json({ message: result });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
