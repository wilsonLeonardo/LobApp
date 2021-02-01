import cors from 'cors';
import express, { Request, NextFunction, Response } from 'express';
import helmet from 'helmet';

import { AllModels } from './models';
import { router } from './routes';
import { sequelize } from './services/database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

app.use((req: Request, res: Response, next: NextFunction) => {
  req.database = sequelize;
  req.models = AllModels;
  next();
});

app.get('/', (req, res) =>
  res.send({ running: true, message: 'Welcome to Lob Imoveis' })
);

app.use(router);

export default app;
