import type { PrismaClient } from '@prisma/client';
import type { ServiceRepository } from '../../domain/repositories/ServiceRepository.js';

export class PrismaServiceRepository implements ServiceRepository {
  constructor(private readonly db: PrismaClient) {}

  findAll() {
    return this.db.service.findMany({ orderBy: { priceFrom: 'asc' } });
  }

  findBySlug(slug: string) {
    return this.db.service.findUnique({ where: { slug } });
  }

  findById(id: string) {
    return this.db.service.findUnique({ where: { id } });
  }
}
