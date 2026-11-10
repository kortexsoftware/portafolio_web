import {
  Showcase,
  ShowcaseCard,
  StackCard,
  stagger,
  useCountUp,
  useCycle,
} from "./Showcase";

// Zonas del mapa corporal (coordenadas del SVG de 120×200)
const zones = [
  { name: "Hombro derecho", x: 40, y: 50, pain: 5 },
  { name: "Rodilla izquierda", x: 72, y: 142, pain: 4 },
  { name: "Tobillo derecho", x: 49, y: 182, pain: 3 },
];

const painDays = [6, 5, 4, 3, 2];

const routine = [
  { name: "Elevación de talones", dose: "3 × 12" },
  { name: "Puente de glúteos", dose: "3 × 10" },
  { name: "Movilidad de tobillo", dose: "2 × 15" },
];

const week = [
  { day: "L", sessions: 2, pain: 6 },
  { day: "M", sessions: 1, pain: 6 },
  { day: "X", sessions: 2, pain: 5 },
  { day: "J", sessions: 3, pain: 4 },
  { day: "V", sessions: 2, pain: 4 },
  { day: "S", sessions: 3, pain: 3 },
  { day: "D", sessions: 1, pain: 2 },
];

const badges = [
  { icon: "7", label: "días de racha" },
  { icon: "★", label: "Primera rutina" },
  { icon: "↓", label: "Menos dolor" },
];

const stack = [
  "Flutter",
  "Dart",
  "Riverpod",
  "GoRouter",
  "Dio",
  "fl_chart",
  "Secure Storage",
  "Notificaciones locales",
];

const BodyMap = ({ active }: { active: boolean }) => {
  const current = useCycle(zones.length, 2800, active);
  const zone = zones[current];
  return (
    <div className="hu-body" aria-hidden="true">
      <svg viewBox="0 0 120 200">
        <g className="hu-silhouette">
          <circle cx="60" cy="18" r="13" />
          <rect x="40" y="34" width="40" height="62" rx="16" />
          <path d="M42 42 L26 92 M78 42 L94 92" />
          <path d="M50 92 L48 184 M70 92 L72 184" />
        </g>
        {zones.map((z, i) => (
          <g key={z.name} className={`hu-zone${i === current ? " is-on" : ""}`}>
            <circle className="hu-zone-wave" cx={z.x} cy={z.y} r="8" />
            <circle cx={z.x} cy={z.y} r="6" />
          </g>
        ))}
      </svg>
      <div key={zone.name} className="hu-zone-card">
        <small>Lesión registrada</small>
        <strong>{zone.name}</strong>
        <span className="hu-chip">En recuperación</span>
        <div className="hu-mini-scale">
          <span>Dolor</span>
          <b>{zone.pain}/10</b>
        </div>
      </div>
    </div>
  );
};

const PainScale = ({ active }: { active: boolean }) => {
  const day = useCycle(painDays.length, 2000, active);
  const value = useCountUp(painDays[day], active, 700);
  const pct = (value / 10) * 100;
  return (
    <div className="hu-pain" aria-hidden="true">
      <div className="hu-pain-value">
        <strong>{Math.round(value)}</strong>
        <span>/10</span>
        <small>Registro del día {day + 1}</small>
      </div>
      <div className="hu-slider">
        <i style={{ width: `${pct}%` }} />
        <b style={{ left: `${pct}%` }} />
      </div>
      <div className="hu-slider-labels">
        <span>Sin dolor</span>
        <span>Intenso</span>
      </div>
    </div>
  );
};

const Routine = ({ active }: { active: boolean }) => {
  const done = useCycle(routine.length + 1, 1600, active);
  const circumference = 2 * Math.PI * 16;
  return (
    <div className="hu-routine" aria-hidden="true">
      <div className="hu-ring">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" />
          <circle
            className="hu-ring-value"
            cx="20"
            cy="20"
            r="16"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - done / routine.length)}
          />
        </svg>
        <span>
          {done}/{routine.length}
        </span>
      </div>
      <ul>
        {routine.map((r, i) => (
          <li key={r.name} className={i < done ? "is-done" : undefined}>
            <i>✓</i>
            <span>{r.name}</span>
            <small>{r.dose}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WeekChart = () => {
  const points = week
    .map((d, i) => `${12 + i * 32},${78 - d.pain * 9}`)
    .join(" ");
  return (
    <div className="hu-week" aria-hidden="true">
      <svg viewBox="0 0 220 100">
        {week.map((d, i) => (
          <rect
            key={d.day}
            className="hu-bar"
            x={4 + i * 32}
            y={84 - d.sessions * 18}
            width="16"
            height={d.sessions * 18}
            rx="5"
            style={stagger(i)}
          />
        ))}
        <polyline className="hu-pain-line" points={points} pathLength={1} />
        {week.map((d, i) => (
          <text key={d.day} x={12 + i * 32} y="97" textAnchor="middle">
            {d.day}
          </text>
        ))}
      </svg>
      <div className="hu-legend">
        <span className="is-bar">Sesiones</span>
        <span className="is-line">Dolor</span>
      </div>
    </div>
  );
};

const Badges = () => (
  <ul className="hu-badges" aria-hidden="true">
    {badges.map((b, i) => (
      <li key={b.label} style={stagger(i)}>
        <span>{b.icon}</span>
        <small>{b.label}</small>
      </li>
    ))}
  </ul>
);

export const HealUp = () => (
  <Showcase
    id="healup"
    index="04"
    theme="theme-hu"
    category="App móvil · Flutter"
    title="HealUp"
    lead="Acompaña la recuperación de lesiones: registro en un mapa del cuerpo, diario de dolor, rutinas de ejercicios y progreso semanal, con logros que mantienen la constancia."
    link={{
      href: "https://github.com/BenjaminCantero/healup-app",
      label: "Ver el código en GitHub",
    }}
  >
    {(active) => (
      <>
        <ShowcaseCard className="ff-span-2 ff-split" order={0}>
          <div>
            <h3>Mapa del cuerpo</h3>
            <p>
              Cada lesión se marca sobre la zona afectada y guarda su estado,
              fase, descripción y foto, para seguir su evolución.
            </p>
          </div>
          <BodyMap active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={1}>
          <h3>Diario de dolor</h3>
          <p>Una escala de 0 a 10 por día muestra cómo evoluciona cada lesión.</p>
          <PainScale active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={2}>
          <h3>Rutina del día</h3>
          <p>Ejercicios con series y repeticiones, marcados al completarlos.</p>
          <Routine active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={3}>
          <h3>Progreso semanal</h3>
          <p>Sesiones realizadas frente al dolor registrado.</p>
          <WeekChart />
        </ShowcaseCard>

        <ShowcaseCard order={4}>
          <h3>Logros y recordatorios</h3>
          <p>Rachas, logros y notificaciones para no perder la constancia.</p>
          <Badges />
        </ShowcaseCard>

        <StackCard
          order={5}
          description="App Flutter por capas (datos y presentación) con estado en Riverpod, navegación con GoRouter y un cliente Dio con renovación de sesión, conectada a una API REST propia."
          stack={stack}
          stats={[
            ["17", "pantallas"],
            ["28", "endpoints de API"],
            ["12k", "líneas de Dart"],
          ]}
        />
      </>
    )}
  </Showcase>
);
