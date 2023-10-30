import { Router } from 'express';
import { create } from './Controller/index.js';

const addressRoutes = Router();

addressRoutes.post('/', create);

export default addressRoutes;
