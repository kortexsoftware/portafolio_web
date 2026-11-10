/** Wires use cases with concrete repositories. Swap API repos for mocks in tests/Storybook. */
import { getProjects } from '@/application/use-cases/getProjects';
import { getServiceBySlug } from '@/application/use-cases/getServiceBySlug';
import { getServices } from '@/application/use-cases/getServices';
import { sendLead } from '@/application/use-cases/sendLead';
import { apiLeadRepository } from '@/infrastructure/repositories/ApiLeadRepository';
import { apiProjectRepository } from '@/infrastructure/repositories/ApiProjectRepository';
import { apiServiceRepository } from '@/infrastructure/repositories/ApiServiceRepository';

export const container = {
  getServices: getServices(apiServiceRepository),
  getServiceBySlug: getServiceBySlug(apiServiceRepository),
  getProjects: getProjects(apiProjectRepository),
  sendLead: sendLead(apiLeadRepository),
};
