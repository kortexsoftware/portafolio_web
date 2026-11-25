import {
  Showcase,
  ShowcaseCard,
  StackCard,
  stagger,
  useCycle,
} from "./Showcase";

const stack = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "TanStack Query",
  "Zustand",
  "Express",
  "Prisma",
  "PostgreSQL",
  "JWT",
  "Nodemailer",
  "Zod",
  "Swagger",
];

const bookingSteps = ["Servicio", "Barbero", "Horario"];
const mailEvents = [
  { title: "Reserva recibida", detail: "Comprobante para el cliente" },
  { title: "Cita confirmada", detail: "Estado y horario actualizados" },
  { title: "Recordatorio", detail: "Envío automático 24 h antes" },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4.2 4.2L19 6.8" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v2.5" />
  </svg>
);

const BookingPreview = ({ active }: { active: boolean }) => {
  const current = useCycle(bookingSteps.length, 1700, active);

  return (
    <div className="ba-booking" aria-hidden="true">
      <div className="ba-window-bar">
        <i />
        <i />
        <i />
        <span>Nueva reserva</span>
      </div>
      <ol>
        {bookingSteps.map((step, index) => (
          <li
            key={step}
            className={`${index < current ? "is-done" : ""}${index === current ? " is-current" : ""}`}
            style={stagger(index)}
          >
            <span>{index + 1}</span>
            <div>
              <strong>{step}</strong>
              <small>
                {index === 0
                  ? "Corte clásico"
                  : index === 1
                    ? "Selecciona un profesional"
                    : "Disponibilidad en tiempo real"}
              </small>
            </div>
            <CheckIcon />
          </li>
        ))}
      </ol>
      <div className="ba-slots">
        <span>10:30</span>
        <span className="is-selected">12:00</span>
        <span>16:30</span>
      </div>
    </div>
  );
};

const EmailPreview = ({ active }: { active: boolean }) => {
  const sent = useCycle(mailEvents.length, 1900, active);

  return (
    <ol className="ba-mails" aria-hidden="true">
      {mailEvents.map((event, index) => (
        <li
          key={event.title}
          className={index <= sent ? "is-sent" : ""}
          style={stagger(index)}
        >
          <span className="ba-mail-icon"><MailIcon /></span>
          <div>
            <strong>{event.title}</strong>
            <small>{event.detail}</small>
          </div>
          <span className="ba-mail-state">Enviado</span>
        </li>
      ))}
    </ol>
  );
};

const DashboardPreview = () => (
  <div className="ba-dashboard" aria-hidden="true">
    <div className="ba-dash-nav">
      <span className="is-active">Agenda</span>
      <span>Reportes</span>
      <span>Equipo</span>
    </div>
    <div className="ba-agenda-head">
      <strong>Próximas citas</strong>
      <span>Estado</span>
    </div>
    <ul>
      {[
        ["10:30", "Corte clásico", "Confirmada"],
        ["12:00", "Corte + barba", "Pendiente"],
        ["16:30", "Perfilado", "Confirmada"],
      ].map(([time, service, status], index) => (
        <li key={time} style={stagger(index)}>
          <time>{time}</time>
          <span>{service}</span>
          <small className={status === "Confirmada" ? "is-ok" : ""}>{status}</small>
        </li>
      ))}
    </ul>
  </div>
);

const AccessPreview = () => (
  <div className="ba-access" aria-hidden="true">
    <div className="ba-lock"><LockIcon /></div>
    <div>
      <strong>Acceso seguro</strong>
      <small>JWT + refresh token en cookie httpOnly</small>
    </div>
    <ul>
      <li>Cliente</li>
      <li>Barbero</li>
      <li>Administrador</li>
    </ul>
  </div>
);

const ReviewPreview = () => (
  <div className="ba-review" aria-hidden="true">
    <div className="ba-stars">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" style={stagger(index)}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
        </svg>
      ))}
    </div>
    <strong>Reseña habilitada</strong>
    <p>Una opinión verificada por cada cita completada.</p>
    <span><CheckIcon /> Cita finalizada</span>
  </div>
);

export const BarberiaApp = () => (
  <Showcase
    id="barberia-app"
    index="03"
    theme="theme-ba"
    category="Sistema de reservas · Full stack"
    title="BarberíaApp"
    lead="Agenda digital para barberías con reservas públicas, disponibilidad en tiempo real, paneles por rol y comunicación automática durante todo el ciclo de la cita."
    link={{
      href: "https://barberiaapp-olive.vercel.app",
      label: "Abrir la aplicación",
    }}
  >
    {(active) => (
      <>
        <ShowcaseCard className="ff-span-2 ff-split" order={0}>
          <div>
            <h3>Reservas sin fricción</h3>
            <p>
              El cliente elige servicio, profesional y hora disponible sin crear
              una cuenta. La agenda aplica las reglas del negocio antes de guardar.
            </p>
          </div>
          <BookingPreview active={active} />
        </ShowcaseCard>

        <ShowcaseCard order={1}>
          <h3>Correos automáticos</h3>
          <p>Confirmaciones, cambios, cancelaciones y recordatorios mantienen informadas a ambas partes.</p>
          <EmailPreview active={active} />
        </ShowcaseCard>

        <ShowcaseCard className="ff-span-2 ff-split" order={2}>
          <div>
            <h3>Dashboard operativo</h3>
            <p>
              Agenda, estados de citas y reportes de ingresos, ocupación y ticket
              promedio reunidos en un panel para el negocio.
            </p>
          </div>
          <DashboardPreview />
        </ShowcaseCard>

        <ShowcaseCard order={3}>
          <h3>Login y permisos</h3>
          <p>Cada rol ve las herramientas que necesita, con recuperación de contraseña y verificación por correo.</p>
          <AccessPreview />
        </ShowcaseCard>

        <ShowcaseCard order={4}>
          <h3>Reputación verificable</h3>
          <p>Las reseñas quedan ligadas a servicios realmente completados.</p>
          <ReviewPreview />
        </ShowcaseCard>

        <ShowcaseCard className="ff-span-2 ba-management" order={5}>
          <div>
            <h3>Gestión completa</h3>
            <p>Servicios, horarios semanales, certificados, portafolios y perfiles de barberos administrados desde el mismo sistema.</p>
          </div>
          <ul>
            <li><CheckIcon /> Reprogramar o cancelar</li>
            <li><CheckIcon /> Gestionar disponibilidad</li>
            <li><CheckIcon /> Moderar portafolios</li>
            <li><CheckIcon /> Consultar reportes</li>
          </ul>
        </ShowcaseCard>

        <StackCard
          order={6}
          description="Monorepo con SPA en React y API REST en Express. Prisma y PostgreSQL sostienen la agenda; Zod valida los contratos, JWT protege las sesiones y Nodemailer coordina los correos transaccionales."
          stack={stack}
          stats={[
            ["3", "roles de acceso"],
            ["24 h", "recordatorio previo"],
            ["REST", "API documentada"],
          ]}
        />
      </>
    )}
  </Showcase>
);
