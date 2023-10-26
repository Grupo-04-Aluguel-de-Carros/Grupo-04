import { Router } from 'express';
const brand = require('./brand');

const routes = Router();

routes.use('/brand', brand);

export default routes;
