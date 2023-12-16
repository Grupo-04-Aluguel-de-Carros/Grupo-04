import { HttpStatusCode } from 'axios';
import { findByIdFeatureService } from '../Service/findByIdFeatureService.js';

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findByIdFeatureService(id);

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      data: result,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
