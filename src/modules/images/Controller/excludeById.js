import { HttpStatusCode } from 'axios';
import { excludeServiceImageById } from '../Service/excludeServiceImageById.js';

export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;

    const featureExcludedById = await excludeServiceImageById(id);

    return res.status(HttpStatusCode.NoContent).json({
      data: featureExcludedById,
    });
  } catch (error) {
    console.log('Error ', error);
    return res.status(error.status).json({ message: error.message });
  }
};
