import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { container } from '@/di/container';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const ContactPage = () => {
  const [params] = useSearchParams();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const budget = form.get('budget');
    setStatus('sending');
    try {
      await container.sendLead({
        name: String(form.get('name')),
        email: String(form.get('email')),
        company: String(form.get('company') || '') || undefined,
        message: String(form.get('message')),
        budget: budget ? Number(budget) : undefined,
        serviceSlug: params.get('servicio') ?? undefined,
      });
      setStatus('sent');
    } catch (err) {
      setError((err as Error).message);
      setStatus('error');
    }
  };

  if (status === 'sent') return <p className="success">¡Gracias! Te contactamos en menos de 24 h.</p>;

  return (
    <section>
      <h1>Contanos tu proyecto</h1>
      <form className="form" onSubmit={onSubmit}>
        <label>Nombre<input name="name" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Empresa<input name="company" /></label>
        <label>Presupuesto (USD)<input name="budget" type="number" min="0" /></label>
        <label>Mensaje<textarea name="message" rows={5} required /></label>
        {status === 'error' && <p role="alert">{error}</p>}
        <button className="btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar'}
        </button>
      </form>
    </section>
  );
};
