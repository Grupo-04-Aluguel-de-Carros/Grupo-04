import { HttpStatusCode } from 'axios';
import { updateUser } from '../Service/index.js';

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBody = req.body;

    const result = await updateUser(id, updateBody);

    return res.json({ data: result });
  } catch (error) {
    return res
      .status(error.status || HttpStatusCode.InternalServerError)
      .json({ error: error.message });
  }
};
