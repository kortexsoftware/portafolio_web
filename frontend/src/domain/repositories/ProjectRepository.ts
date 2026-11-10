import type { Project } from '../entities/Project';

export interface ProjectRepository {
  getAll(): Promise<Project[]>;
}
