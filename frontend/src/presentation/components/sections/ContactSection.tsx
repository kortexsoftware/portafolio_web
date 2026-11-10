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
      <div className="contact-details">
        <div>
          <span className="icon-box">
            <Icon name="mail" />
          </span>
          <p>
            <small>Correo</small>Cuéntanos a través del formulario
          </p>
        </div>
        <div>
          <span className="icon-box pink">
            <Icon name="phone" />
          </span>
          <p>
            <small>Atención comercial</small>Solicita que te contactemos
          </p>
        </div>
        <div>
          <span className="icon-box">
            <Icon name="pin" />
          </span>
          <p>
            <small>Ubicación</small>Chile · Atención online
          </p>
        </div>
      </div>
    </div>
    <ContactForm />
  </section>
);
