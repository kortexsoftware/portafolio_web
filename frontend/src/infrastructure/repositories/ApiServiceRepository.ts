import type { Service } from '@/domain/entities/Service';
import type { ServiceRepository } from '@/domain/repositories/ServiceRepository';
import { http } from '../http/httpClient';

export const apiServiceRepository: ServiceRepository = {
  getAll: () => http<Service[]>('/services'),
  getBySlug: (slug) => http<Service>(`/services/${slug}`),
};
