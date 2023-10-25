import { Router } from 'express';
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);

export default routes;
