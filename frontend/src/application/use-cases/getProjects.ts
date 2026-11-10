import type { ProjectRepository } from '@/domain/repositories/ProjectRepository';

export const getProjects = (repo: ProjectRepository) => () => repo.getAll();
