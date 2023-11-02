import { Router } from 'express';
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import brandRoutes from './modules/brand/brand.routes.js';
import storeRoutes from './modules/store/store.routes.js';
import carRoutes from './modules/car/car.routes.js';
import addressRoutes from './modules/address/address.routes.js';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/brand', brandRoutes);
routes.use('/store', storeRoutes);
routes.use('/car', carRoutes);
routes.use('/address', addressRoutes);

export default routes;
