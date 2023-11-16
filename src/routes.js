import { Router } from 'express';
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import brandRoutes from './modules/brand/brand.routes.js';
import storeRoutes from './modules/store/store.routes.js';
import carRoutes from './modules/car/car.routes.js';
import addressRoutes from './modules/address/address.routes.js';
import featureRoutes from './modules/feature/feature.routes.js';
import imageRoutes from './modules/images/images.router.js';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/brand', brandRoutes);
routes.use('/store', storeRoutes);
routes.use('/car', carRoutes);
routes.use('/address', addressRoutes);
routes.use('/feature', featureRoutes);
routes.use('/image', imageRoutes);

export default routes;
