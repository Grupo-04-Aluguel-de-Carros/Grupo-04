import { HttpStatusCode } from 'axios';
import validateBrandBeforeCreate from './brand.service';

export const create = async (req, res) => {
  const sucess = res.status(HttpStatusCode.Ok);
  const badRequest = res.status(HttpStatusCode.BadRequest);
  try {
    const { name } = req.body;
    const result = await validateBrandBeforeCreate({ name });
    return sucess.json({
      data: result,
      message: 'Marca registrada com sucesso !',
    });
  } catch (error) {
    return badRequest.json({ error: error.message });
  }
};
export const exclude = async (req, res) => {};
export const read = async (req, res) => {};
export const update = async (req, res) => {};
