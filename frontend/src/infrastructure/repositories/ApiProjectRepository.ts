import type { Project } from '@/domain/entities/Project';
import type { ProjectRepository } from '@/domain/repositories/ProjectRepository';
import { http } from '../http/httpClient';

export const apiProjectRepository: ProjectRepository = {
  getAll: () => http<Project[]>('/projects'),
};
