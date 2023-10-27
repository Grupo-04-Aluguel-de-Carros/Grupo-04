import { Router } from 'express';
const brandRoutes = Router();

brandRoutes.get('/' /* getAll */);
brandRoutes.get('/:name' /* getByName */);
brandRoutes.post('/createBrand' /* create */);
brandRoutes.put('/updateBrand/:id' /* updateById */);
brandRoutes.delete('/deleteBrand/:id' /* deleteById */);

export default brandRoutes;
