import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes.js';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', routes);

export default app;
