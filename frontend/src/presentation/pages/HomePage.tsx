import { Hero } from '../components/sections/Hero';
import { ServicesGrid } from '../components/sections/ServicesGrid';

export const HomePage = () => (
  <>
    <Hero />
    <section>
      <h2>Servicios</h2>
      <ServicesGrid />
    </section>
  </>
);
