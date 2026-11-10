import type { PrismaClient, Lead as LeadRow } from '@prisma/client';
import { Lead } from '../../domain/entities/Lead.js';
import type { LeadRepository } from '../../domain/repositories/LeadRepository.js';

const toDomain = (row: LeadRow) => Lead.create(row);

export class PrismaLeadRepository implements LeadRepository {
  constructor(private readonly db: PrismaClient) {}

  async save(lead: Lead) {
    const { id, createdAt, ...data } = lead.props;
    const row = await this.db.lead.create({ data });
    return toDomain(row);
  }

  async findAll() {
    const rows = await this.db.lead.findMany({ orderBy: { createdAt: 'desc' } });
    return rows.map(toDomain);
  }
}
