import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './presentation/router/AppRouter';
import './presentation/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
