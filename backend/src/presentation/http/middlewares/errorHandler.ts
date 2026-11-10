import type { ErrorRequestHandler } from 'express';
import { DomainError } from '../../../domain/errors/DomainError.js';

const statusByCode: Record<string, number> = {
  VALIDATION_ERROR: 400,
  NOT_FOUND: 404,
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof DomainError) {
    res.status(statusByCode[err.code] ?? 400).json({ error: err.code, message: err.message });
    return;
  }
  console.error(err);
  res.status(500).json({ error: 'INTERNAL_ERROR' });
};
