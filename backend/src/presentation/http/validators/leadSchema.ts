import { z } from 'zod';

export const createLeadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
  budget: z.number().int().nonnegative().optional(),
  serviceSlug: z.string().optional(),
});
