import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

type PageHeaderProps = {
  index: string;
  title: string;
  lead: ReactNode;
  visual: ReactNode;
};

export const PageHeader = ({ index, title, lead, visual }: PageHeaderProps) => {
  const { ref, seen, inView } = useInView<HTMLElement>(0);
  return (
    <header
      ref={ref}
      className={`page-header${seen ? " is-visible" : ""}${inView ? "" : " is-paused"}`}
    >
      <div className="wrap page-header-inner">
        <div className="page-header-copy">
          <nav className="breadcrumb" aria-label="Ruta">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <p className="page-index" aria-hidden="true">
            <span>{index}</span> Módulo
          </p>
          <h1>{title}</h1>
          <p className="page-lead">{lead}</p>
        </div>
        <div className="page-visual" aria-hidden="true">
          {visual}
        </div>
      </div>
    </header>
  );
};
