import { contact } from "../../content/contact";
import { ContactForm } from "../forms/ContactForm";
import { Icon } from "../ui/Icon";
export const ContactSection = () => (
  <section id="contacto" className="section wrap contact-section">
    <div>
      <p className="eyebrow">Escríbenos</p>
      <h2>
        Hablemos de tu
        <br />
        proyecto
      </h2>
      <p className="contact-lead">
        Escríbenos por el canal que te acomode. También puedes dejarnos tus
        datos en el formulario y te contactamos nosotros.
      </p>
      <div className="contact-details">
        <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
          <span className="icon-box">
            <Icon name="chat" />
          </span>
          <p>
            <small>WhatsApp</small>
            {contact.phoneDisplay}
          </p>
          <span className="contact-go" aria-hidden="true">
            <Icon name="arrow" />
          </span>
        </a>
        <a href={`mailto:${contact.email}`}>
          <span className="icon-box pink">
            <Icon name="mail" />
          </span>
          <p>
            <small>Correo</small>
            {contact.email}
          </p>
          <span className="contact-go" aria-hidden="true">
            <Icon name="arrow" />
          </span>
        </a>
        <a href={contact.phoneHref}>
          <span className="icon-box">
            <Icon name="phone" />
          </span>
          <p>
            <small>Llámanos</small>
            {contact.phoneDisplay}
          </p>
          <span className="contact-go" aria-hidden="true">
            <Icon name="arrow" />
          </span>
        </a>
        <div>
          <span className="icon-box pink">
            <Icon name="pin" />
          </span>
          <p>
            <small>Ubicación</small>
            {contact.location}
          </p>
        </div>
      </div>
    </div>
    <ContactForm />
  </section>
);
