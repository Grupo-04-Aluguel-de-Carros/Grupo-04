import { HttpStatusCode } from 'axios';
import { excludeServiceById } from '../Service/excludeServiceById.js';

export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;

    const featureExcludedById = excludeServiceById(id);

    return res.status(HttpStatusCode.NoContent).json({
      data: featureExcludedById,
    });
  } catch (error) {
    console.log('Error ', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
