import { HttpStatusCode } from 'axios';
import { deleteAddress } from '../Service/index.js';

export const exclude = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteAddress(id);

    return res.status(HttpStatusCode.NoContent).end();
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
