import type { ServiceRepository } from '../../../domain/repositories/ServiceRepository.js';

export class ListServices {
  constructor(private readonly services: ServiceRepository) {}

  execute() {
    return this.services.findAll();
  }
}
