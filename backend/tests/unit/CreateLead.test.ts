import { describe, expect, it, vi } from 'vitest';
import { CreateLead } from '../../src/application/use-cases/leads/CreateLead.js';
import type { Lead } from '../../src/domain/entities/Lead.js';
import { NotFoundError, ValidationError } from '../../src/domain/errors/DomainError.js';

const makeSut = () => {
  const leads = { save: vi.fn(async (l: Lead) => l), findAll: vi.fn() };
  const services = {
    findAll: vi.fn(),
    findById: vi.fn(),
    findBySlug: vi.fn(async (slug: string) => (slug === 'landing-page' ? { id: 's1' } : null)),
  };
  const notifier = { notifyNewLead: vi.fn(async () => {}) };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { sut: new CreateLead(leads, services as any, notifier), leads, notifier };
};

const valid = { name: 'Ana', email: 'ANA@Mail.com ', message: 'Quiero una landing page' };

describe('CreateLead', () => {
  it('saves lead, normalizes email and notifies', async () => {
    const { sut, notifier } = makeSut();
    const lead = await sut.execute({ ...valid, serviceSlug: 'landing-page' });
    expect(lead.props.email).toBe('ana@mail.com');
    expect(lead.props.serviceId).toBe('s1');
    expect(notifier.notifyNewLead).toHaveBeenCalledOnce();
  });

  it('rejects unknown service', async () => {
    const { sut } = makeSut();
    await expect(sut.execute({ ...valid, serviceSlug: 'nope' })).rejects.toBeInstanceOf(NotFoundError);
  });

  it('rejects short message', async () => {
    const { sut } = makeSut();
    await expect(sut.execute({ ...valid, message: 'hola' })).rejects.toBeInstanceOf(ValidationError);
  });
});
