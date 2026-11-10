import type { Lead } from '../../domain/entities/Lead.js';
import type { Notifier } from '../../domain/repositories/Notifier.js';

/** Dev adapter. Swap for a Resend/Nodemailer adapter in production without touching use cases. */
export class ConsoleNotifier implements Notifier {
  async notifyNewLead(lead: Lead) {
    console.info(`[lead] ${lead.props.name} <${lead.props.email}>`);
  }
}
