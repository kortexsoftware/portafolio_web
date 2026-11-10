import {
  Showcase,
  ShowcaseCard,
  StackCard,
  stagger,
  useCountUp,
  useCycle,
} from "./Showcase";

const cities = [
  {
    name: "Santiago",
    stores: [
      ["Perfumería Centro", 64990],
      ["Tienda online", 69990],
      ["Sucursal Mall", 74490],
    ],
  },
  {
    name: "Valparaíso",
    stores: [
      ["Tienda online", 66490],
      ["Perfumería Puerto", 68990],
      ["Sucursal Mall", 72990],
    ],
  },
  {
    name: "Concepción",
    stores: [
      ["Sucursal Mall", 63990],
      ["Perfumería Centro", 67490],
      ["Tienda online", 69990],
    ],
  },
] as const;

const matches = [
  { value: 92, note: "Amaderado cálido" },
  { value: 87, note: "Cítrico fresco" },
  { value: 95, note: "Gourmand suave" },
];

const notes = [
  { name: "Bergamota", family: "Cítrica", stars: 5 },
  { name: "Vainilla", family: "Gourmand", stars: 4 },
  { name: "Sándalo", family: "Amaderada", stars: 5 },
];

const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Leaflet",
  "Swagger",
];

const clp = (n: number) => `$${n.toLocaleString("es-CL")}`;

const Comparator = ({ active }: { active: boolean }) => {
  const city = cities[useCycle(cities.length, 3600, active)];
  return (
    <div className="ff-compare" aria-hidden="true">
      <div className="ff-compare-head">
        <span key={city.name} className="ff-swap">
          {city.name}
        </span>
        <span>{city.stores.length} tiendas</span>
      </div>
      <ol key={city.name}>
        {city.stores.map(([store, price], i) => (
          <li key={store} className={i === 0 ? "is-best" : undefined} style={stagger(i)}>
            <span>{store}</span>
            {i === 0 && <em>Mejor precio</em>}
            <strong>{clp(price)}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};

const MatchRing = ({ active }: { active: boolean }) => {
  const match = matches[useCycle(matches.length, 3200, active)];
  const shown = Math.round(useCountUp(match.value, active));
  const circumference = 2 * Math.PI * 34;
  return (
    <div className="ff-ring" aria-hidden="true">
      <svg viewBox="0 0 80 80">
        <circle className="ff-ring-track" cx="40" cy="40" r="34" />
        <circle
          className="ff-ring-value"
          cx="40"
          cy="40"
          r="34"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - shown / 100)}
        />
      </svg>
      <div>
        <strong>{shown}%</strong>
        <small>coincidencia</small>
      </div>
      <p key={match.note} className="ff-swap">
        {match.note}
      </p>
    </div>
  );
};

const StoresMap = () => (
  <div className="ff-map" aria-hidden="true">
    <svg viewBox="0 0 300 110" preserveAspectRatio="xMidYMid slice">
      <path className="ff-road" d="M-10 0 L310 118" />
      <path className="ff-road ff-road-thin" d="M0 96 L300 22" />
      <path className="ff-route" d="M150 58 L92 40" />
      {[
        [92, 40],
        [196, 26],
        [232, 80],
        [118, 86],
      ].map(([cx, cy], i) => (
        <circle key={i} className="ff-store" cx={cx} cy={cy} r="6" style={stagger(i)} />
      ))}
      <circle className="ff-user-wave" cx="150" cy="58" r="7" />
      <circle className="ff-user" cx="150" cy="58" r="6" />
    </svg>
  </div>
);

const Lock = () => (
  <div className="ff-lock" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path className="ff-shackle" d="M8 11V7a4 4 0 0 1 8 0v4" />
      <rect x="5" y="11" width="14" height="10" rx="2.5" />
      <path d="M12 15v2.5" />
    </svg>
    <ul>
      {["JWT", "bcrypt", "Google Sign-In"].map((t, i) => (
        <li key={t} style={stagger(i)}>
          {t}
        </li>
      ))}
    </ul>
  </div>
);

export const FullFragrance = () => (
  <Showcase
    id="fullfragrance"
    index="01"
    theme="theme-ff"
    category="Web full stack"
    title="FullFragrance"
    lead="Descubre perfumes, compara precios entre las tiendas de tu ciudad y recibe recomendaciones según tus gustos."
    link={{ href: "https://fullfragance.cl", label: "Visitar fullfragance.cl" }}
  >
    {(active) => (
      <>
        <ShowcaseCard className="ff-span-2 ff-split" order={0}>
          <div>
            <h3>Comparador de precios</h3>
            <p>
              Ordena las tiendas de menor a mayor y marca la mejor oferta según
              la ciudad del usuario.
            </p>
          </div>
          <Comparator active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={1}>
          <h3>Recomendaciones</h3>
          <p>Cruza el test y los favoritos, y explica cada sugerencia.</p>
          <MatchRing active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={2}>
          <h3>Test olfativo</h3>
          <p>22 notas en cuatro etapas, calificadas de 1 a 5.</p>
          <ul className="ff-notes" aria-hidden="true">
            {notes.map((n, row) => (
              <li key={n.name}>
                <span>
                  {n.name}
                  <small>{n.family}</small>
                </span>
                <span className="ff-stars">
                  {Array.from({ length: 5 }, (_, s) => (
                    <i
                      key={s}
                      className={s < n.stars ? "is-on" : undefined}
                      style={stagger(row * 5 + s)}
                    >
                      ★
                    </i>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </ShowcaseCard>

        <ShowcaseCard order={3}>
          <h3>Tiendas cercanas</h3>
          <p>Sucursales reales desde OpenStreetMap, ordenadas por distancia.</p>
          <StoresMap />
        </ShowcaseCard>

        <ShowcaseCard order={4}>
          <h3>Cuentas seguras</h3>
          <p>
            JWT, Google Sign-In, bcrypt y revocación de sesiones al cambiar la
            contraseña.
          </p>
          <Lock />
        </ShowcaseCard>

        <StackCard
          order={5}
          description="Frontend organizado por funcionalidades, API documentada con Swagger y migración idempotente a PostgreSQL."
          stack={stack}
        />
      </>
    )}
  </Showcase>
);
