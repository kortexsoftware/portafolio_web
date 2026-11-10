import type { Project } from '../entities/Project.js';

export interface ProjectRepository {
  findAll(): Promise<Project[]>;
  findBySlug(slug: string): Promise<Project | null>;
}
