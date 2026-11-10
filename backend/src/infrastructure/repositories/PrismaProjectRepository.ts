import type { PrismaClient } from '@prisma/client';
import type { ProjectRepository } from '../../domain/repositories/ProjectRepository.js';

export class PrismaProjectRepository implements ProjectRepository {
  constructor(private readonly db: PrismaClient) {}

  findAll() {
    return this.db.project.findMany({ orderBy: { publishedAt: 'desc' } });
  }

  findBySlug(slug: string) {
    return this.db.project.findUnique({ where: { slug } });
  }
}
