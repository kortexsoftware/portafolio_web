import type { LeadRepository } from '../../../domain/repositories/LeadRepository.js';

export class ListLeads {
  constructor(private readonly leads: LeadRepository) {}

  execute() {
    return this.leads.findAll();
  }
}
