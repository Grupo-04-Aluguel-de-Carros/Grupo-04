import { Router } from 'express';
import { exclude, findById, findMany, update } from './Controller/index.js';
import { isAuthenticated, validate } from '../../middleware/index.js';
import { updateUserSchema } from './Dto/updateUser.js';

const userRoutes = Router();

userRoutes.get('/', findMany);
userRoutes.get('/:id', isAuthenticated, findById);
userRoutes.put('/edit/:id', validate(updateUserSchema), update);
userRoutes.delete('/delete/:id', exclude);

export default userRoutes;