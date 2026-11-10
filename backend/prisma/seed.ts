import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

await prisma.service.createMany({
  skipDuplicates: true,
  data: [
    {
      slug: 'landing-page',
      name: 'Landing Page',
      description: 'Página de alto impacto enfocada en conversión.',
      category: 'WEB',
      priceFrom: 300,
      features: ['Diseño a medida', 'SEO básico', 'Formulario de contacto'],
    },
    {
      slug: 'web-corporativa',
      name: 'Web Corporativa',
      description: 'Sitio multipágina con panel autoadministrable.',
      category: 'WEB',
      priceFrom: 800,
      features: ['Hasta 8 secciones', 'Blog', 'Panel admin'],
    },
    {
      slug: 'software-a-medida',
      name: 'Software a Medida',
      description: 'Sistemas de gestión adaptados a tu negocio.',
      category: 'SOFTWARE',
      priceFrom: 2500,
      features: ['Análisis de requerimientos', 'Roles y permisos', 'Soporte'],
    },
  ],
});

await prisma.$disconnect();
