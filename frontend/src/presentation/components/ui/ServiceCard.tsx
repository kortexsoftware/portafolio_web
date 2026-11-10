import { Link } from 'react-router-dom';
import type { Service } from '@/domain/entities/Service';
import { formatPrice } from '@/shared/utils/formatPrice';

export const ServiceCard = ({ service }: { service: Service }) => (
  <article className="card">
    <h3>{service.name}</h3>
    <p>{service.description}</p>
    <ul>
      {service.features.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
    <p className="price">Desde {formatPrice(service.priceFrom)}</p>
    <Link to={`/contacto?servicio=${service.slug}`} className="btn">Lo quiero</Link>
  </article>
);
