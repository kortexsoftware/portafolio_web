import type { LeadInput } from '@/domain/entities/Lead';
import type { LeadRepository } from '@/domain/repositories/LeadRepository';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Client-side rules run before hitting the API; backend validates again. */
export const sendLead = (repo: LeadRepository) => async (input: LeadInput) => {
  if (!EMAIL_RE.test(input.email)) throw new Error('Email inválido');
  if (input.message.trim().length < 10) throw new Error('Contanos un poco más sobre tu proyecto');
  await repo.send(input);
};
