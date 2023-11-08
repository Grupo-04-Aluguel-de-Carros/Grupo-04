import { HttpStatusCode } from 'axios';
import { findBrandByNameService } from '../Service/findBrandByNameService.js';

export const findByName = async (req, res) => {
  try {
    const { name } = req.query;
    const nameDesiarilized = name;
    const result = await findBrandByNameService(nameDesiarilized);
    return res.status(HttpStatusCode.Ok).json({
      status: true,
      data: result,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
