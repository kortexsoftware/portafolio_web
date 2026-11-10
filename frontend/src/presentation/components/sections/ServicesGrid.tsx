import { container } from '@/di/container';
import { useAsync } from '../../hooks/useAsync';
import { ServiceCard } from '../ui/ServiceCard';

export const ServicesGrid = () => {
  const { data, loading, error } = useAsync(container.getServices);

  if (loading) return <p>Cargando servicios…</p>;
  if (error) return <p role="alert">No pudimos cargar los servicios.</p>;

  return (
    <div className="grid">
      {data?.map((s) => <ServiceCard key={s.id} service={s} />)}
    </div>
  );
};
