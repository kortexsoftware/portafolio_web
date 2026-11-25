import type { CSSProperties } from "react";
import {
  Showcase,
  ShowcaseCard,
  StackCard,
  stagger,
  useCountUp,
  useCycle,
} from "./Showcase";

type Furniture = "crib" | "chair" | "table" | "pikler" | "shelf" | "stool";

// Productos reales del catálogo importado, agrupados por nivel educativo
const levels: {
  name: string;
  ages: string;
  tone: string;
  products: { name: string; kind: Furniture; price: number; before?: number }[];
}[] = [
  {
    name: "Sala cuna",
    ages: "0–2",
    tone: "blue",
    products: [
      { name: "Cuna baja normada JUNJI", kind: "crib", price: 130990, before: 145990 },
      { name: "Silla nido JUNJI", kind: "chair", price: 39990 },
      { name: "Mesa circular sala cuna", kind: "table", price: 100900, before: 120000 },
    ],
  },
  {
    name: "Nivel medio",
    ages: "2–4",
    tone: "red",
    products: [
      { name: "Triángulo Pikler", kind: "pikler", price: 55990 },
      { name: "Cubo Pikler Montessori", kind: "stool", price: 54990 },
      { name: "Librero Montessori", kind: "shelf", price: 49990, before: 75990 },
    ],
  },
  {
    name: "Transición",
    ages: "4–6",
    tone: "green",
    products: [
      { name: "Silla infantil león", kind: "chair", price: 22990 },
      { name: "Mesa párvulo cuadrada", kind: "table", price: 63990, before: 75990 },
      { name: "Estante escolar bajo", kind: "shelf", price: 95990 },
    ],
  },
];

const steps = ["Carrito", "Datos", "Pago", "Listo"];

const tracking = [
  { label: "Pago confirmado", when: "Lun 10:42" },
  { label: "En preparación", when: "Mar 09:15" },
  { label: "Despachado", when: "Mié 16:30" },
  { label: "Entregado", when: "Jue 12:05" },
];

const queries = [
  { typed: "cuna coigue", match: "Cuna coigüe JUNJI" },
  { typed: "pikler", match: "Triángulo Pikler" },
  { typed: "silla leon", match: "Silla infantil león" },
];

const stock = [
  { name: "Cunas y camas", value: 72, tone: "blue" },
  { name: "Sillas", value: 88, tone: "yellow" },
  { name: "Montessori y Pikler", value: 41, tone: "green" },
  { name: "Almacenamiento", value: 18, tone: "red" },
];

const stack = [
  "Next.js 16",
  "React 19",
  "Tailwind CSS 4",
  "Express 5",
  "Prisma 7",
  "PostgreSQL 18",
  "TypeScript",
  "Zod",
  "Vitest",
  "OpenAPI",
  "pnpm workspaces",
  "Docker",
];

// Cada letra con un color del logo, como en la marca original
const WORDMARK = ["T", "o", "t", "a", "l", " ", "K", "i", "d", "s"];

const clp = (n: number) => `$${Math.round(n).toLocaleString("es-CL")}`;

/** Siluetas simples de muebles dibujadas sobre una grilla de 48×40. */
const FurnitureIcon = ({ kind }: { kind: Furniture }) => (
  <svg viewBox="0 0 48 40">
    {kind === "crib" && (
      <>
        <rect x="6" y="10" width="36" height="20" rx="3" />
        <path d="M13 12v16M19 12v16M25 12v16M31 12v16M37 12v16" />
        <path d="M8 30v6M40 30v6" />
      </>
    )}
    {kind === "chair" && (
      <>
        <rect x="15" y="4" width="18" height="14" rx="6" />
        <rect x="12" y="20" width="24" height="6" rx="3" />
        <path d="M15 26v10M33 26v10" />
      </>
    )}
    {kind === "table" && (
      <>
        <rect x="4" y="12" width="40" height="7" rx="3.5" />
        <path d="M10 19v17M38 19v17" />
      </>
    )}
    {kind === "pikler" && (
      <>
        <path d="M6 36 L24 5 L42 36" />
        <path d="M11 28h26M15 21h18M19 14h10" />
      </>
    )}
    {kind === "stool" && (
      <>
        <rect x="9" y="8" width="30" height="28" rx="4" />
        <circle cx="24" cy="22" r="7" />
      </>
    )}
    {kind === "shelf" && (
      <>
        <rect x="8" y="4" width="32" height="32" rx="3" />
        <path d="M8 15h32M8 26h32M24 4v32" />
      </>
    )}
  </svg>
);

const Catalog = ({ active }: { active: boolean }) => {
  const current = useCycle(levels.length, 3200, active);
  const level = levels[current];
  return (
    <div className="tk-catalog" aria-hidden="true">
      <div className="tk-levels">
        {levels.map((l, i) => (
          <span
            key={l.name}
            className={`tk-level tk-${l.tone}${i === current ? " is-on" : ""}`}
          >
            <b>{l.ages}</b>
            {l.name}
          </span>
        ))}
      </div>
      <ul key={level.name} className="tk-products">
        {level.products.map((p, i) => (
          <li key={p.name} className={`tk-${level.tone}`} style={stagger(i)}>
            <div className="tk-thumb">
              <FurnitureIcon kind={p.kind} />
              {p.before && (
                <span className="tk-off">
                  −{Math.round((1 - p.price / p.before) * 100)}%
                </span>
              )}
            </div>
            <strong>{p.name}</strong>
            <span className="tk-price">
              {clp(p.price)}
              {p.before && <s>{clp(p.before)}</s>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Checkout = ({ active }: { active: boolean }) => {
  const step = useCycle(steps.length, 1500, active);
  const total = useCountUp(step >= 1 ? 165980 : 170980, active, 700);
  return (
    <div className="tk-checkout" aria-hidden="true">
      <ol className="tk-steps">
        {steps.map((s, i) => (
          <li key={s} className={i <= step ? "is-done" : undefined}>
            <i>{i < step || step === steps.length - 1 ? "✓" : i + 1}</i>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <div className="tk-receipt">
        <p>
          <span>Cuna baja normada JUNJI × 1</span>
          <span>{clp(130990)}</span>
        </p>
        <p>
          <span>Silla nido JUNJI × 1</span>
          <span>{clp(39990)}</span>
        </p>
        <p className={`tk-coupon${step >= 1 ? " is-on" : ""}`}>
          <span>Cupón JARDIN5</span>
          <span>−{clp(5000)}</span>
        </p>
        <p className="tk-total">
          <span>Total</span>
          <strong>{clp(total)}</strong>
        </p>
      </div>
    </div>
  );
};

const Tracking = ({ active }: { active: boolean }) => {
  const reached = useCycle(tracking.length + 1, 1400, active);
  return (
    <ol className="tk-track" aria-hidden="true">
      {tracking.map((t, i) => (
        <li
          key={t.label}
          className={`${i < reached ? "is-done" : ""}${i === reached ? " is-next" : ""}`}
        >
          <i />
          <span>{t.label}</span>
          <small>{i < reached ? t.when : "Pendiente"}</small>
        </li>
      ))}
    </ol>
  );
};

const Search = ({ active }: { active: boolean }) => {
  const current = useCycle(queries.length, 2600, active);
  const q = queries[current];
  return (
    <div className="tk-search" aria-hidden="true">
      <div className="tk-search-box">
        <svg viewBox="0 0 20 20">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="M13 13l4 4" />
        </svg>
        <span key={q.typed} style={{ "--n": q.typed.length } as CSSProperties}>
          {q.typed}
        </span>
      </div>
      <p key={q.match} className="tk-hit">
        <b>1 resultado</b> {q.match}
      </p>
    </div>
  );
};

const Inventory = () => (
  <ul className="tk-stock" aria-hidden="true">
    {stock.map((s, i) => (
      <li key={s.name} className={`tk-${s.tone}`} style={stagger(i)}>
        <span>{s.name}</span>
        <small>{s.value < 25 ? "Stock bajo" : `${s.value} u.`}</small>
        <div>
          <i style={{ width: `${s.value}%` }} />
        </div>
      </li>
    ))}
  </ul>
);

export const TotalKids = () => (
  <Showcase
    id="totalkids"
    index="04"
    theme="theme-tk"
    category="E-commerce · Monorepo full-stack"
    title={
      <span className="tk-wordmark" aria-label="Total Kids">
        {WORDMARK.map((ch, i) =>
          ch === " " ? (
            " "
          ) : (
            <span key={i} aria-hidden="true" style={stagger(i)}>
              {ch}
            </span>
          ),
        )}
      </span>
    }
    lead="Tienda online de mobiliario infantil para jardines, salas cuna y familias: catálogo por nivel educativo, compra como invitado, seguimiento del pedido y un panel completo para operar la tienda."
  >
    {(active) => (
      <>
        <ShowcaseCard className="ff-span-2 ff-split" order={0}>
          <div>
            <h3>Catálogo por nivel</h3>
            <p>
              Cunas, sillas, mesas y equipamiento Montessori y Pikler ordenados
              según la edad de los niños, con variantes, extras y precios de
              oferta.
            </p>
          </div>
          <Catalog active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={1}>
          <h3>Compra sin cuenta</h3>
          <p>Carrito con cupones, datos de despacho y pago en línea.</p>
          <Checkout active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={2}>
          <h3>Seguimiento del pedido</h3>
          <p>Cada cambio de estado queda registrado y se avisa por correo.</p>
          <Tracking active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={3}>
          <h3>Búsqueda sin tildes</h3>
          <p>Encuentra «coigüe» aunque se escriba «coigue».</p>
          <Search active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={4}>
          <h3>Panel de inventario</h3>
          <p>Stock por categoría con alertas antes de quedarse sin productos.</p>
          <Inventory />
        </ShowcaseCard>

        <StackCard
          order={5}
          description="Monorepo con pnpm: tienda y panel en Next.js, API Express documentada con OpenAPI y PostgreSQL con Prisma. El navegador nunca llama directo a la API; pasa por rutas propias de Next.js en el servidor."
          stack={stack}
          stats={[
            ["88", "productos en catálogo"],
            ["7", "categorías"],
            ["16", "secciones del panel"],
          ]}
        />
      </>
    )}
  </Showcase>
);
