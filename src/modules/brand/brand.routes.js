import { Router } from 'express';
const brandRoute = Router();

brandRoute.get('/', getAll);
brandRoute.get('/:name', getByName);
brandRoute.post('/createBrand', create);
brandRoute.put('/updateBrand/:id', updateById);
brandRoute.delete('/deleteBrand/:id', deleteById);

export default brandRoute;
