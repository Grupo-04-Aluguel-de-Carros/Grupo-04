import { HttpStatusCode } from 'axios';
import {
  deleteUser,
  findManyUsers,
  findUserById,
  updateUser,
} from './user.service.js';

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findUserById(id);

    return res.json({ message: result });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBody = req.body;

    const result = await updateUser(id, updateBody);

    return res.json({ data: result });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};

export const exclude = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteUser(id);

    return res.status(HttpStatusCode.NoContent).end();
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};

export const findMany = async (req, res) => {
  try {
    const result = await findManyUsers();

    return res.json({ data: result });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};
