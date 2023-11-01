import { HttpStatusCode } from 'axios';
import { deleteCar } from '../Service/index.js';

export const exclude = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCar(id);

    return res.status(HttpStatusCode.NoContent).end();
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
