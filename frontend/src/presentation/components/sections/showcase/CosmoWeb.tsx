import { LogoMark } from "../../ui/Logo";
import { Showcase, ShowcaseCard, StackCard, stagger, useCycle } from "./Showcase";

// Nodos del grafo de portada (posiciones en un lienzo de 220 × 150)
const nodes = [
  { label: "Productos", x: 186, y: 40 },
  { label: "Proyectos", x: 176, y: 120 },
  { label: "Clientes", x: 44, y: 120 },
  { label: "Planes", x: 30, y: 48 },
  { label: "Equipo", x: 110, y: 14 },
];

const fields = ["Nombre", "Empresa", "Correo"];

const widths = [
  { label: "Móvil", w: 34 },
  { label: "Tablet", w: 62 },
  { label: "Escritorio", w: 100 },
];

const focusItems = ["Inicio", "Productos", "Contacto"];

const stack = ["React", "TypeScript", "Vite", "Express", "Prisma", "Zod", "Vercel"];

const NetworkMap = ({ active }: { active: boolean }) => {
  const hot = useCycle(nodes.length, 1500, active);
  return (
    <svg className="cs-map" viewBox="0 0 220 150" aria-hidden="true">
      {nodes.map((n, i) => (
        <line
          key={n.label}
          x1="110"
          y1="78"
          x2={n.x}
          y2={n.y}
          className={i === hot ? "is-hot" : undefined}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={n.label} className={i === hot ? "cs-node is-hot" : "cs-node"}>
          <circle cx={n.x} cy={n.y} r="9" />
          <text x={n.x} y={n.y + (n.y > 78 ? 22 : -14)} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}
      <circle className="cs-core" cx="110" cy="78" r="20" />
      <circle className="cs-core-dot" cx="110" cy="78" r="6" />
    </svg>
  );
};

const LeadForm = ({ active }: { active: boolean }) => {
  // 0–2: se completa cada campo; 3: enviado
  const step = useCycle(5, 1100, active);
  return (
    <div className="cs-form" aria-hidden="true">
      {fields.map((f, i) => (
        <div key={f} className={`cs-field${step > i ? " is-filled" : ""}`}>
          <span>{f}</span>
          <i />
        </div>
      ))}
      <div className={`cs-send${step >= 3 ? " is-sent" : ""}`}>
        {step >= 3 ? "Mensaje recibido ✓" : "Enviar"}
      </div>
    </div>
  );
};

const Responsive = ({ active }: { active: boolean }) => {
  const i = useCycle(widths.length, 1800, active);
  return (
    <div className="cs-resp" aria-hidden="true">
      <div className="cs-frame" style={{ width: `${widths[i].w}%` }}>
        <i />
        <i className="is-short" />
        <i className="is-accent" />
      </div>
      <span>{widths[i].label}</span>
    </div>
  );
};

const FocusRing = ({ active }: { active: boolean }) => {
  const f = useCycle(focusItems.length, 1200, active);
  return (
    <ul className="cs-focus" aria-hidden="true">
      {focusItems.map((item, i) => (
        <li key={item} className={i === f ? "is-focus" : undefined} style={stagger(i)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export const CosmoWeb = () => (
  <Showcase
    id="cosmo-web"
    index="05"
    theme="theme-cs"
    category="Sitio corporativo · Full stack"
    title="Cosmo Software"
    lead="Nuestro propio sitio: presenta los productos, proyectos y planes de la empresa, y convierte visitas en conversaciones con un formulario conectado a nuestra API."
  >
    {(active) => (
      <>
        <ShowcaseCard className="ff-span-2 ff-split" order={0}>
          <div>
            <h3>Un mapa en vez de un menú</h3>
            <p>
              La portada muestra la empresa como una red: cada nodo es una
              sección del sitio y se puede abrir con clic, toque o teclado.
            </p>
          </div>
          <NetworkMap active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={1}>
          <h3>Formulario conectado</h3>
          <p>Cada consulta se valida y se guarda en nuestra base de datos.</p>
          <LeadForm active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={2}>
          <h3>Identidad propia</h3>
          <p>Logo, colores y tipografía diseñados para la marca.</p>
          <div className="cs-logo" aria-hidden="true">
            <LogoMark variant="plain" size={84} animated={active} />
          </div>
        </ShowcaseCard>

        <ShowcaseCard order={3}>
          <h3>Se adapta a cada pantalla</h3>
          <p>Del teléfono al escritorio, sin perder contenido.</p>
          <Responsive active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={4}>
          <h3>Usable con teclado</h3>
          <p>Foco visible, buen contraste y respeto al movimiento reducido.</p>
          <FocusRing active={active} />
        </ShowcaseCard>

        <StackCard
          order={5}
          description="Frontend en React y TypeScript compilado con Vite; API en Express con Prisma y validación con Zod, organizada por capas para crecer sin reescribir."
          stack={stack}
          stats={[
            ["9", "rutas del sitio"],
            ["5", "endpoints de API"],
            ["1", "formulario de contacto"],
          ]}
        />
      </>
    )}
  </Showcase>
);
