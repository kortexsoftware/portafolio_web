import type { Request, Response } from 'express';
import type { ListProjects } from '../../../application/use-cases/projects/ListProjects.js';

export class ProjectController {
  constructor(private readonly listProjects: ListProjects) {}

  list = async (_req: Request, res: Response) => {
    res.json(await this.listProjects.execute());
  };
}
