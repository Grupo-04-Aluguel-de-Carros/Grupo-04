import { HttpStatusCode } from 'axios';
import { createStore } from '../Service/index.js';

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await createStore({ name });

    return res.status(HttpStatusCode.Created).json({ message: result });
  } catch (error) {
    console.log('error', error);
    return res.status(error.status).json({ error: error.message });
  }
};
