# portafolio_web

Web para una agencia de venta de software y páginas web.

- **Frontend:** React 19 + Vite + TypeScript + React Router
- **Backend:** Node.js + Express 5 + TypeScript + Prisma + PostgreSQL + Zod
- **Arquitectura:** Clean Architecture en ambos lados (monorepo con npm workspaces)

## Inicio rápido

```bash
npm install
docker compose up -d                      # PostgreSQL
cp backend/.env.example backend/.env
npm run prisma:migrate -w backend         # crea tablas
npm run prisma:seed -w backend            # servicios de ejemplo
npm run dev                               # API :3000 + web :5173
```

## Regla de dependencias

```
presentation  ->  application  ->  domain
infrastructure ->  domain (implementa sus interfaces)
```

`domain` no importa nada externo. Las implementaciones concretas solo se conectan
en el composition root (`backend/src/container.ts`, `frontend/src/di/container.ts`).

## Estructura

```
backend/
  prisma/                  schema.prisma, seed.ts
  src/
    domain/                entidades, reglas de negocio, puertos (interfaces)
      entities/            Lead, Service, Project
      repositories/        LeadRepository, ServiceRepository, Notifier...
      errors/              DomainError, ValidationError, NotFoundError
    application/           casos de uso (orquestan el dominio)
      dtos/
      use-cases/           leads/, services/, projects/
    infrastructure/        adaptadores: Prisma, mail, config/env
    presentation/http/     Express: app, routes, controllers, middlewares, validators
    container.ts           composition root (inyección de dependencias)
    main.ts
  tests/unit, tests/integration

frontend/src/
  domain/                  entidades y contratos de repositorios
  application/use-cases/   getServices, getProjects, sendLead...
  infrastructure/          httpClient + repositorios API
  di/container.ts          conecta casos de uso con repositorios
  presentation/            components (layout, ui, sections), pages, hooks, router, styles
  shared/                  config, utils
```

## API

| Método | Ruta                  | Descripción              |
|--------|-----------------------|--------------------------|
| GET    | /api/health           | Estado                   |
| GET    | /api/services         | Catálogo de servicios    |
| GET    | /api/services/:slug   | Detalle de servicio      |
| GET    | /api/projects         | Portafolio               |
| POST   | /api/leads            | Solicitud de presupuesto |
| GET    | /api/leads            | Listado (proteger con auth) |
