import {
  Showcase,
  ShowcaseCard,
  StackCard,
  stagger,
  useCountUp,
  useCycle,
} from "./Showcase";

const sets = [
  { previous: "60 × 8", load: "62,5", reps: 8 },
  { previous: "60 × 8", load: "62,5", reps: 8 },
  { previous: "60 × 7", load: "62,5", reps: 7 },
  { previous: "60 × 6", load: "60", reps: 7 },
];

const macros = [
  { name: "Proteínas", value: 95, goal: 130, tone: "green" },
  { name: "Carbos", value: 160, goal: 220, tone: "sand" },
  { name: "Grasas", value: 42, goal: 60, tone: "earth" },
];

const week = [
  { day: "L", state: "done" },
  { day: "M", state: "done" },
  { day: "X", state: "done" },
  { day: "J", state: "today" },
  { day: "V", state: "next" },
  { day: "S", state: "next" },
  { day: "D", state: "rest" },
] as const;

const nights = [6.5, 7.2, 7.5, 6.8, 8, 7.4, 7.5];
const NIGHT_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

const stack = [
  "Expo",
  "React Native",
  "Expo Router",
  "TypeScript",
  "Hono",
  "Deno",
  "Supabase",
  "Zod",
  "Zustand",
  "TanStack Query",
  "SQLite",
  "OpenAPI",
];

const kcal = (n: number) => Math.round(n).toLocaleString("es-CL");

const Session = ({ active }: { active: boolean }) => {
  // 0..4 series completadas; la siguiente queda activa
  const done = useCycle(sets.length + 1, 1700, active);
  return (
    <div className="sf-session" aria-hidden="true">
      <div className="sf-session-head">
        <strong>Press banca</strong>
        <span>
          Serie {Math.min(done + 1, sets.length)} de {sets.length}
        </span>
      </div>
      <div className="sf-sets">
        <div className="sf-set sf-set-head">
          <span>Serie</span>
          <span>Anterior</span>
          <span>kg</span>
          <span>Reps</span>
          <span />
        </div>
        {sets.map((s, i) => (
          <div
            key={i}
            className={`sf-set${i < done ? " is-done" : ""}${i === done ? " is-current" : ""}`}
          >
            <span>{i + 1}</span>
            <span>{s.previous}</span>
            <span>{s.load}</span>
            <span>{s.reps}</span>
            <span className="sf-check">✓</span>
          </div>
        ))}
      </div>
      <div className="sf-rest">
        <span>{done === sets.length ? "Sesión completa" : "Descanso 1:30"}</span>
        <i key={done} className={done === sets.length ? "is-full" : undefined} />
      </div>
    </div>
  );
};

const Energy = ({ active }: { active: boolean }) => {
  const eaten = useCountUp(1420, active, 1400);
  return (
    <div className="sf-energy" aria-hidden="true">
      <p className="sf-kcal">
        <strong>{kcal(eaten)}</strong> / 2.100 kcal
      </p>
      <div className="sf-bar">
        <i style={{ width: `${(eaten / 2100) * 100}%` }} />
      </div>
      <ul className="sf-macros">
        {macros.map((m, i) => (
          <li key={m.name} style={stagger(i)}>
            <span>{m.name}</span>
            <strong>
              {m.value}
              <small> / {m.goal} g</small>
            </strong>
            <div className={`sf-bar sf-${m.tone}`}>
              <i style={{ width: `${(m.value / m.goal) * (eaten / 1420) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Week = () => (
  <ol className="sf-week" aria-hidden="true">
    {week.map((d, i) => (
      <li key={d.day} className={`is-${d.state}`} style={stagger(i)}>
        <span>{d.day}</span>
        <i>{d.state === "done" ? "✓" : d.state === "rest" ? "z" : "•"}</i>
      </li>
    ))}
  </ol>
);

const Sleep = () => (
  <div className="sf-sleep" aria-hidden="true">
    <div className="sf-sleep-bars">
      {nights.map((h, i) => (
        <span key={i} style={stagger(i)}>
          <i style={{ height: `${(h / 9) * 100}%` }} />
          <small>{NIGHT_LABELS[i]}</small>
        </span>
      ))}
    </div>
    <p>
      <strong>7 h 30</strong> · 5 ciclos estimados
    </p>
  </div>
);

const WeightChart = () => (
  <div className="sf-weight" aria-hidden="true">
    <svg viewBox="0 0 300 96" preserveAspectRatio="none">
      <path className="sf-goal" vectorEffect="non-scaling-stroke" d="M8 14 L292 78" />
      <path
        className="sf-trend"
        pathLength={1}
        d="M8 18 C36 8 54 30 82 28 S122 42 150 44 S192 52 220 60 S266 70 292 74"
      />
    </svg>
    <i className="sf-now" />
    <p>
      <strong>−2,4 kg</strong> en 8 semanas
    </p>
  </div>
);

export const StrongerFit = () => (
  <Showcase
    id="strongerfit"
    index="02"
    theme="theme-sf"
    category="App móvil · Android-first"
    title="StrongerFit"
    lead="Entrenamiento, alimentación, sueño y progreso en una sola app: rutinas semanales, registro de comidas y metas que se ajustan a cada día."
    link={{
      href: "https://github.com/BenjaminCantero/StrongerFit",
      label: "Ver el código en GitHub",
    }}
  >
    {(active) => (
      <>
        <ShowcaseCard className="ff-span-2 ff-split" order={0}>
          <div>
            <h3>Sesión de entrenamiento</h3>
            <p>
              Registra carga y repeticiones por serie, precarga lo que hiciste la
              vez anterior y controla el descanso con temporizador.
            </p>
          </div>
          <Session active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={1}>
          <h3>Energía diaria</h3>
          <p>Calorías y macros calculados desde el diario de comidas.</p>
          <Energy active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={2}>
          <h3>Constancia semanal</h3>
          <p>Días entrenados frente a la rutina planificada, con descanso incluido.</p>
          <Week />
        </ShowcaseCard>

        <ShowcaseCard order={3}>
          <h3>Sueño</h3>
          <p>Registro de horas y ciclos estimados con historial de 7 días.</p>
          <Sleep />
        </ShowcaseCard>

        <ShowcaseCard order={4}>
          <h3>Meta de peso</h3>
          <p>Tendencia real frente a la línea ideal hacia el objetivo.</p>
          <WeightChart />
        </ShowcaseCard>

        <StackCard
          order={5}
          description="Monorepo con motores de entrenamiento y nutrición en TypeScript puro, contratos Zod compartidos entre la app y una API Hono documentada con OpenAPI."
          stack={stack}
          stats={[
            ["10", "programas clásicos"],
            ["251", "alimentos en catálogo"],
            ["5", "secciones de la app"],
          ]}
        />
      </>
    )}
  </Showcase>
);
