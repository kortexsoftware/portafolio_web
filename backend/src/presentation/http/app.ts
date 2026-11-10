import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import type { Container } from '../../container.js';
import { env } from '../../infrastructure/config/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { buildRouter } from './routes/index.js';

export const buildApp = (container: Container) => {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: env.CORS_ORIGIN }));
  app.use(express.json());
  app.use('/api', buildRouter(container));
  app.use(errorHandler);
  return app;
};
