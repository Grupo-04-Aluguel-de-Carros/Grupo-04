import { Router } from 'express';
import { create } from './Controller/index.js';
import { validate } from '../../middleware/index.js';
import { registerUserSchema } from './Dto/registerUserSchema.js';
import { login } from './Controller/index.js';
import { loginSchema } from './Dto/loginSchema.js';

const authRoutes = Router();

authRoutes.post('/', validate(registerUserSchema), create);
authRoutes.post('/login', validate(loginSchema), login);

export default authRoutes;
