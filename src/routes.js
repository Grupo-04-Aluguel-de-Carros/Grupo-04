import { Router } from 'express';
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import brandRoutes from './modules/brand/brand.routes.js';
import storeRoutes from './modules/store/store.routes.js';
import carRoutes from './modules/car/car.routes.js';
import categoryRoutes from './modules/categories/categories.routes.js';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/brand', brandRoutes);
routes.use('/category', categoryRoutes);
routes.use('/store', storeRoutes);
routes.use('/car', carRoutes);

export default routes;
