import { Lead } from '../../../domain/entities/Lead.js';
import { NotFoundError } from '../../../domain/errors/DomainError.js';
import type { LeadRepository } from '../../../domain/repositories/LeadRepository.js';
import type { Notifier } from '../../../domain/repositories/Notifier.js';
import type { ServiceRepository } from '../../../domain/repositories/ServiceRepository.js';
import type { CreateLeadDTO } from '../../dtos/CreateLeadDTO.js';

export class CreateLead {
  constructor(
    private readonly leads: LeadRepository,
    private readonly services: ServiceRepository,
    private readonly notifier: Notifier,
  ) {}

  async execute(input: CreateLeadDTO): Promise<Lead> {
    let serviceId: string | null = null;
    if (input.serviceSlug) {
      const service = await this.services.findBySlug(input.serviceSlug);
      if (!service) throw new NotFoundError('Service');
      serviceId = service.id;
    }

    const lead = Lead.create({ ...input, serviceId });
    const saved = await this.leads.save(lead);
    await this.notifier.notifyNewLead(saved);
    return saved;
  }
}
