import { Router } from 'express';
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import addressRoutes from './modules/address/address.routes.js';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/address', addressRoutes);

export default routes;
