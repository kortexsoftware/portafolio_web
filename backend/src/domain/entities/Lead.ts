import { ValidationError } from '../errors/DomainError.js';

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUOTED' | 'WON' | 'LOST';

export interface LeadProps {
  id?: string;
  name: string;
  email: string;
  company?: string | null;
  message: string;
  budget?: number | null;
  status?: LeadStatus;
  serviceId?: string | null;
  createdAt?: Date;
}

/** Business rules for a potential client (lead) live here, independent of DB or HTTP. */
export class Lead {
  private constructor(public readonly props: Required<Omit<LeadProps, 'id' | 'createdAt'>> & Pick<LeadProps, 'id' | 'createdAt'>) {}

  static create(props: LeadProps): Lead {
    if (props.name.trim().length < 2) throw new ValidationError('Name is too short');
    if (props.message.trim().length < 10) throw new ValidationError('Message is too short');
    if (props.budget != null && props.budget < 0) throw new ValidationError('Budget must be positive');

    return new Lead({
      id: props.id,
      name: props.name.trim(),
      email: props.email.trim().toLowerCase(),
      company: props.company ?? null,
      message: props.message.trim(),
      budget: props.budget ?? null,
      status: props.status ?? 'NEW',
      serviceId: props.serviceId ?? null,
      createdAt: props.createdAt,
    });
  }
}
