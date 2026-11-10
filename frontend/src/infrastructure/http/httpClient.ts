import { env } from '@/shared/config/env';

export class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}

export const http = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const res = await fetch(`${env.apiUrl}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new HttpError(res.status, body.message ?? res.statusText);
  }
  return res.status === 204 ? (undefined as T) : res.json();
};
