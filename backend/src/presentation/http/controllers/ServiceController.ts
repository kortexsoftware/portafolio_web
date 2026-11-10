import type { Request, Response } from 'express';
import type { GetServiceBySlug } from '../../../application/use-cases/services/GetServiceBySlug.js';
import type { ListServices } from '../../../application/use-cases/services/ListServices.js';

export class ServiceController {
  constructor(
    private readonly listServices: ListServices,
    private readonly getServiceBySlug: GetServiceBySlug,
  ) {}

  list = async (_req: Request, res: Response) => {
    res.json(await this.listServices.execute());
  };

  getBySlug = async (req: Request<{ slug: string }>, res: Response) => {
    res.json(await this.getServiceBySlug.execute(req.params.slug));
  };
}
