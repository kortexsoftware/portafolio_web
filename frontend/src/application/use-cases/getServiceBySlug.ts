import type { ServiceRepository } from '@/domain/repositories/ServiceRepository';

export const getServiceBySlug = (repo: ServiceRepository) => (slug: string) => repo.getBySlug(slug);
