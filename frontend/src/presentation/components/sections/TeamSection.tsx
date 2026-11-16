import { teamMembers } from "../../content/team";
import { useInView } from "../../hooks/useInView";
import { Icon } from "../ui/Icon";

export const TeamSection = () => {
  const { ref, seen } = useInView<HTMLElement>(0.12);

  return (
    <section
      ref={ref}
      className={`section wrap team-roster${seen ? " is-visible" : ""}`}
      aria-labelledby="team-title"
    >
      <div className="team-intro">
        <h2 id="team-title">
          El software tiene
          <br />personas detrás.
        </h2>
        <p>
          Reunimos producto, desarrollo y acompañamiento para hacernos cargo de
          cada decisión, desde la primera conversación hasta el despliegue.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <article
            key={member.id}
            className={`team-card${member.published ? " is-published" : " is-pending"}`}
          >
            <div className="team-card-visual" aria-hidden="true">
              <span>{member.initials}</span>
              <small>
                {member.published ? "Perfil publicado" : "Perfil pendiente"}
              </small>
            </div>

            <div className="team-card-body">
              <p className="team-card-role">{member.role}</p>
              <h3>{member.name}</h3>
              <p className="team-card-description">{member.description}</p>

              {member.specialties.length > 0 && (
                <ul
                  className="team-card-specialties"
                  aria-label={`Especialidades de ${member.name}`}
                >
                  {member.specialties.map((specialty) => (
                    <li key={specialty}>{specialty}</li>
                  ))}
                </ul>
              )}

              {member.published ? (
                <div className="team-card-links">
                  {member.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} <Icon name="arrow" />
                    </a>
                  ))}
                </div>
              ) : (
                <span className="team-card-unavailable">
                  Portafolio por publicar
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
