import { Router } from 'express';
import { exclude, findById, findMany, update } from './users.controller.js';
import { validate } from '../../middleware/validate.js';
import { updateUserSchema } from './user.schema.js';

const userRoutes = Router();

userRoutes.get('/', findMany);
userRoutes.get('/:id', findById);
userRoutes.put('/edit/:id', validate(updateUserSchema), update);
userRoutes.delete('/delete/:id', exclude);

export default userRoutes;
