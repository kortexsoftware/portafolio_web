import { container } from '@/di/container';
import { useAsync } from '../hooks/useAsync';

export const PortfolioPage = () => {
  const { data, loading } = useAsync(container.getProjects);

  return (
    <section>
      <h1>Portafolio</h1>
      {loading && <p>Cargando…</p>}
      {data?.length === 0 && <p>Pronto publicaremos nuestros proyectos.</p>}
      <div className="grid">
        {data?.map((p) => (
          <article key={p.id} className="card">
            <img src={p.imageUrl} alt={p.title} />
            <h3>{p.title}</h3>
            <small>{p.client}</small>
            <p>{p.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
