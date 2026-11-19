import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import {
  AboutPage,
  ClientsPage,
  ContactPage,
  PlansPage,
  ProductsPage,
  ProjectsPage,
  TeamPage,
} from "../pages/ModulePages";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ServicePage } from "../pages/ServicePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/quienes-somos", element: <AboutPage /> },
      { path: "/equipo", element: <TeamPage /> },
      { path: "/productos", element: <ProductsPage /> },
      { path: "/productos/:slug", element: <ServicePage /> },
      { path: "/proyectos", element: <ProjectsPage /> },
      { path: "/clientes", element: <ClientsPage /> },
      { path: "/planes", element: <PlansPage /> },
      { path: "/contacto", element: <ContactPage /> },
      // Rutas antiguas
      { path: "/servicios", element: <Navigate to="/productos" replace /> },
      { path: "/portafolio", element: <Navigate to="/proyectos" replace /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
