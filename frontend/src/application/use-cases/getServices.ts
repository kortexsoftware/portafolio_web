import type { ServiceRepository } from '@/domain/repositories/ServiceRepository';

export const getServices = (repo: ServiceRepository) => () => repo.getAll();
