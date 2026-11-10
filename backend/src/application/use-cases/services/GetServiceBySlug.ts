import { NotFoundError } from '../../../domain/errors/DomainError.js';
import type { ServiceRepository } from '../../../domain/repositories/ServiceRepository.js';

export class GetServiceBySlug {
  constructor(private readonly services: ServiceRepository) {}

  async execute(slug: string) {
    const service = await this.services.findBySlug(slug);
    if (!service) throw new NotFoundError('Service');
    return service;
  }
}
