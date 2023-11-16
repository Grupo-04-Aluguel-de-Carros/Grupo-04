import { HttpStatusCode } from 'axios';
import { findAllServiceImage } from '../Service/findAllServiceImage.js';

export const findAllImages = async (req, res) => {
  try {
    const resultFromFindAll = await findAllServiceImage();

    return res.status(HttpStatusCode.Ok).json({
      data: resultFromFindAll,
    });
  } catch (error) {
    console.log('Error ==> ', error);
    return res.status(error.status).json({
      message: error.message,
    });
  }
};
