import type { Lead } from '../entities/Lead.js';

/** Port: how the agency gets notified of new leads (email, Slack, etc.). */
export interface Notifier {
  notifyNewLead(lead: Lead): Promise<void>;
}
