import { Router } from 'express';
import { create } from './Controller/index.js';
import { validate } from '../../middleware/index.js';
import { registerUserSchema } from './Dto/registerUser.js';
import { login } from './Controller/index.js';

const authRoutes = Router();

authRoutes.post('/', validate(registerUserSchema), create);
authRoutes.post('/login', login);

export default authRoutes;