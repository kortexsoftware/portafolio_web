import type { LeadRepository } from '@/domain/repositories/LeadRepository';
import { http } from '../http/httpClient';

export const apiLeadRepository: LeadRepository = {
  send: async (lead) => {
    await http('/leads', { method: 'POST', body: JSON.stringify(lead) });
  },
};
