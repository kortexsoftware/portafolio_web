import type { ProjectRepository } from '../../../domain/repositories/ProjectRepository.js';

export class ListProjects {
  constructor(private readonly projects: ProjectRepository) {}

  execute() {
    return this.projects.findAll();
  }
}
