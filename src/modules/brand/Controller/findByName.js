import { HttpStatusCode } from 'axios';
import { findBrandByNameService } from '../Service/findBrandByNameService.js';

export const findByName = async (req, res) => {
  try {
    const { name } = req.params;
    const nameDesiarilized = name;
    console.log(nameDesiarilized);
    const result = await findBrandByNameService(nameDesiarilized);

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      data: result,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
