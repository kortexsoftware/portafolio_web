import type { Lead } from '../entities/Lead.js';

export interface LeadRepository {
  save(lead: Lead): Promise<Lead>;
  findAll(): Promise<Lead[]>;
}
