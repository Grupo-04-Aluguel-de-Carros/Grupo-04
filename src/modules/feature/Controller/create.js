import { HttpStatusCode } from 'axios';

export const create = async (req, res) => {
  try {
    const { massageSystem } = req.body;
    return res.status(HttpStatusCode.Ok).json({
      data: massageSystem,
    });
  } catch (error) {
    console.log(error);
  }
};
