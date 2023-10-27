import { Router } from 'express';
import { create } from './auth.controller.js';
import { validate } from '../../middleware/validate.js';
import { registerUserSchema } from './auth.schema.js';

const authRoutes = Router();

authRoutes.post('/', validate(registerUserSchema), create);

export default authRoutes;
