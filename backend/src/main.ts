import { buildContainer } from './container.js';
import { env } from './infrastructure/config/env.js';
import { buildApp } from './presentation/http/app.js';

const app = buildApp(buildContainer());

app.listen(env.PORT, () => {
  console.info(`API running on http://localhost:${env.PORT}/api`);
});
