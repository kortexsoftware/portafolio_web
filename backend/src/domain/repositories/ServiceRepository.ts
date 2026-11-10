import type { Service } from '../entities/Service.js';

export interface ServiceRepository {
  findAll(): Promise<Service[]>;
  findBySlug(slug: string): Promise<Service | null>;
  findById(id: string): Promise<Service | null>;
}
