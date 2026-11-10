import type { Service } from '../entities/Service';

export interface ServiceRepository {
  getAll(): Promise<Service[]>;
  getBySlug(slug: string): Promise<Service>;
}
