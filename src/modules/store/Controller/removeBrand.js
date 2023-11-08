import { HttpStatusCode } from 'axios';
import { removeBrandFromStore } from '../Service/index.js';

export const removeBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { brands } = req.body;

    await removeBrandFromStore(id, brands);
    return res.status(HttpStatusCode.NoContent).end();
  } catch (error) {
    return res
      .status(error.status || HttpStatusCode.InternalServerError)
      .json({ error: error.message });
  }
};
