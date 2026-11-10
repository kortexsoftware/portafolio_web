import type { Request, Response } from 'express';
import type { CreateLead } from '../../../application/use-cases/leads/CreateLead.js';
import type { ListLeads } from '../../../application/use-cases/leads/ListLeads.js';

export class LeadController {
  constructor(
    private readonly createLead: CreateLead,
    private readonly listLeads: ListLeads,
  ) {}

  create = async (req: Request, res: Response) => {
    const lead = await this.createLead.execute(req.body);
    res.status(201).json(lead.props);
  };

  list = async (_req: Request, res: Response) => {
    const leads = await this.listLeads.execute();
    res.json(leads.map((l) => l.props));
  };
}
