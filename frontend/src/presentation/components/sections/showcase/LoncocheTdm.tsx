import {
  Showcase,
  ShowcaseCard,
  StackCard,
  stagger,
  useCycle,
} from "./Showcase";

// Crónicas publicadas en el sitio (títulos abreviados)
const stories = [
  {
    file: "liga-regional-reumen.md",
    title: "Histórica presentación en Reumén",
    category: "Resultados",
    date: "2026-10-17",
  },
  {
    file: "desfile-loncoche-2026.md",
    title: "Presentes en el Desfile de Loncoche",
    category: "Institucional",
    date: "2026-09-18",
  },
  {
    file: "torneo-villarrica-2026.md",
    title: "Rumbo al Torneo Internacional Villarrica",
    category: "Torneos",
    date: "2026-06-01",
  },
];

const slides = ["Resultados", "Torneos", "Galería"];

const events = [
  { month: "AGO", place: "Temuco", name: "Torneo regional" },
  { month: "SEP", place: "Futrono", name: "Liga Regional Los Ríos" },
  { month: "OCT", place: "Reumén", name: "6ª fecha de la Liga" },
];

const stack = ["Astro", "Tailwind CSS", "TypeScript", "Markdown", "Vercel"];

const NewsPipeline = ({ active }: { active: boolean }) => {
  const story = stories[useCycle(stories.length, 3400, active)];
  return (
    <div className="lt-pipeline" aria-hidden="true">
      <pre key={story.file} className="lt-md">
        <span className="lt-file">{story.file}</span>
        <code>
          <span style={stagger(0)}>---</span>
          <span style={stagger(1)}>
            titulo: <b>"{story.title}"</b>
          </span>
          <span style={stagger(2)}>
            categoria: <b>"{story.category}"</b>
          </span>
          <span style={stagger(3)}>
            fecha: <b>{story.date}</b>
          </span>
          <span style={stagger(4)}>---</span>
        </code>
      </pre>
      <span className="lt-arrow">→</span>
      <article key={story.title} className="lt-news">
        <div className="lt-news-img" />
        <em>{story.category}</em>
        <strong>{story.title}</strong>
        <small>{story.date.split("-").reverse().join("/")}</small>
      </article>
    </div>
  );
};

const Carousel = ({ active }: { active: boolean }) => {
  const index = useCycle(slides.length, 2600, active);
  return (
    <div className="lt-carousel" aria-hidden="true">
      <div className="lt-slides" style={{ translate: `${-index * 100}% 0` }}>
        {slides.map((s, i) => (
          <div key={s} className={`lt-slide lt-slide-${i}`}>
            <em>{s}</em>
            <i />
            <i className="is-short" />
          </div>
        ))}
      </div>
      <div className="lt-dots">
        {slides.map((s, i) => (
          <span key={s} className={i === index ? "is-on" : undefined}>
            {i === index && <i key={index} />}
          </span>
        ))}
      </div>
    </div>
  );
};

const Calendar = ({ active }: { active: boolean }) => {
  const next = useCycle(events.length, 2200, active);
  return (
    <ol className="lt-calendar" aria-hidden="true">
      {events.map((e, i) => (
        <li key={e.place} className={i === next ? "is-next" : undefined}>
          <span>{e.month}</span>
          <div>
            <strong>{e.place}</strong>
            <small>{e.name}</small>
          </div>
        </li>
      ))}
    </ol>
  );
};

const ThemeSwitch = ({ active }: { active: boolean }) => {
  const dark = useCycle(2, 2400, active) === 1;
  return (
    <div className={`lt-theme${dark ? " is-dark" : ""}`} aria-hidden="true">
      <div className="lt-toggle">
        <i />
        <span>{dark ? "☾" : "☀"}</span>
      </div>
      <div className="lt-mini">
        <i />
        <i className="is-short" />
        <i className="is-accent" />
      </div>
    </div>
  );
};

const Table = () => (
  <div className="lt-table" aria-hidden="true">
    <svg viewBox="0 0 220 90">
      <rect className="lt-board" x="10" y="30" width="200" height="50" rx="4" />
      <path className="lt-line" d="M110 30 V80 M10 55 H210" />
      <path className="lt-net" d="M110 22 V34" />
      <circle className="lt-ball" cx="0" cy="0" r="4.5" />
    </svg>
  </div>
);

export const LoncocheTdm = () => (
  <Showcase
    id="loncoche-tdm"
    index="03"
    theme="theme-lt"
    category="Sitio web · Astro"
    title="Loncoche TDM"
    lead="Noticiero oficial de la Selección de Tenis de Mesa de Loncoche: crónicas, plantel, calendario y galerías que el club actualiza editando archivos simples."
    link={{
      href: "https://noticiastenisdemesaloncoche.vercel.app",
      label: "Visitar el sitio",
    }}
  >
    {(active) => (
      <>
        <ShowcaseCard className="ff-span-2 ff-split" order={0}>
          <div>
            <h3>Noticias sin tocar código</h3>
            <p>
              Cada crónica es un archivo Markdown con título, fecha y
              categoría. Al guardarlo, el sitio genera su página y la tarjeta
              de portada.
            </p>
          </div>
          <NewsPipeline active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={1}>
          <h3>Portada en carrusel</h3>
          <p>Las noticias destacadas rotan en la portada del sitio.</p>
          <Carousel active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={2}>
          <h3>Calendario de torneos</h3>
          <p>Fechas y sedes de las competencias en que participa el club.</p>
          <Calendar active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={3}>
          <h3>Modo oscuro</h3>
          <p>Selector manual de tema claro u oscuro, recordado por visitante.</p>
          <ThemeSwitch active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={4}>
          <h3>Hecho para el club</h3>
          <p>Plantel, cuerpo técnico y galerías de cada fecha.</p>
          <Table />
        </ShowcaseCard>

        <StackCard
          order={5}
          description="Sitio 100% estático: Astro genera el HTML desde archivos Markdown y Vercel lo despliega, sin servidor ni base de datos que mantener."
          stack={stack}
          stats={[
            ["8", "crónicas publicadas"],
            ["4", "categorías de noticias"],
            ["0", "servidores que mantener"],
          ]}
        />
      </>
    )}
  </Showcase>
);
