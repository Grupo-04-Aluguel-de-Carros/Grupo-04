import { HttpStatusCode } from 'axios';
import { deleteUser } from '../Service/index.js';

export const exclude = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteUser(id);

    return res.status(HttpStatusCode.NoContent).end();
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};
