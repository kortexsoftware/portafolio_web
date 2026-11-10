import type { LeadInput } from '../entities/Lead';

export interface LeadRepository {
  send(lead: LeadInput): Promise<void>;
}
