import { HttpStatusCode } from 'axios';
import { deleteStore } from '../Service/index.js';

export const exclude = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteStore(id);

    return res.status(HttpStatusCode.NoContent).end();
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
