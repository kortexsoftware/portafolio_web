/**
 * Composition root: the only place that knows concrete implementations.
 * Inner layers (domain/application) depend on interfaces only.
 */
import { CreateLead } from './application/use-cases/leads/CreateLead.js';
import { ListLeads } from './application/use-cases/leads/ListLeads.js';
import { ListProjects } from './application/use-cases/projects/ListProjects.js';
import { GetServiceBySlug } from './application/use-cases/services/GetServiceBySlug.js';
import { ListServices } from './application/use-cases/services/ListServices.js';
import { prisma } from './infrastructure/database/prisma.js';
import { ConsoleNotifier } from './infrastructure/mail/ConsoleNotifier.js';
import { PrismaLeadRepository } from './infrastructure/repositories/PrismaLeadRepository.js';
import { PrismaProjectRepository } from './infrastructure/repositories/PrismaProjectRepository.js';
import { PrismaServiceRepository } from './infrastructure/repositories/PrismaServiceRepository.js';
import { LeadController } from './presentation/http/controllers/LeadController.js';
import { ProjectController } from './presentation/http/controllers/ProjectController.js';
import { ServiceController } from './presentation/http/controllers/ServiceController.js';

export const buildContainer = () => {
  const repos = {
    service: new PrismaServiceRepository(prisma),
    project: new PrismaProjectRepository(prisma),
    lead: new PrismaLeadRepository(prisma),
  };
  const notifier = new ConsoleNotifier();

  const controllers = {
    service: new ServiceController(new ListServices(repos.service), new GetServiceBySlug(repos.service)),
    project: new ProjectController(new ListProjects(repos.project)),
    lead: new LeadController(new CreateLead(repos.lead, repos.service, notifier), new ListLeads(repos.lead)),
  };

  return { controllers };
};

export type Container = ReturnType<typeof buildContainer>;
