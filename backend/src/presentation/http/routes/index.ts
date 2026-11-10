import { Router } from 'express';
import type { Container } from '../../../container.js';
import { validateBody } from '../middlewares/validate.js';
import { createLeadSchema } from '../validators/leadSchema.js';

export const buildRouter = ({ controllers }: Container) => {
  const router = Router();

  router.get('/health', (_req, res) => res.json({ ok: true }));

  router.get('/services', controllers.service.list);
  router.get('/services/:slug', controllers.service.getBySlug);

  router.get('/projects', controllers.project.list);

  router.post('/leads', validateBody(createLeadSchema), controllers.lead.create);
  // TODO: protect with auth middleware before exposing an admin panel
  router.get('/leads', controllers.lead.list);

  return router;
};
