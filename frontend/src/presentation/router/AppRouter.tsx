import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { ServicesPage } from '../pages/ServicesPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/servicios', element: <ServicesPage /> },
      { path: '/portafolio', element: <PortfolioPage /> },
      { path: '/contacto', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
