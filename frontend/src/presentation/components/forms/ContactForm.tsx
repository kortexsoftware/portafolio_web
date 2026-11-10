import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { container } from "@/di/container";
export const ContactForm = () => {
  const [params] = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      await container.sendLead({
        name: String(form.get("name")).trim(),
        email: String(form.get("email")).trim(),
        company: String(form.get("company") || "").trim() || undefined,
        message: String(form.get("message")).trim(),
        serviceSlug: params.get("servicio") ?? undefined,
      });
      setStatus("sent");
    } catch {
      setError(
        "No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo nuevamente.",
      );
      setStatus("error");
    }
  };
  return (
    <form
      className="contact-form form"
      onSubmit={submit}
      aria-label="Cuéntanos tu proyecto"
      aria-busy={status === "sending"}
    >
      {status === "sent" ? (
        <div className="form-success" role="status">
          <span>¡Mensaje recibido!</span>
          <p>
            Gracias por contarnos tu proyecto. Nos pondremos en contacto
            contigo.
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setStatus("idle")}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <>
          <div className="form-row">
            <label>
              Nombre
              <input
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
              />
            </label>
            <label>
              Empresa
              <input
                name="company"
                autoComplete="organization"
                maxLength={100}
              />
            </label>
          </div>
          <label>
            Correo
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            ¿Qué necesitas?
            <textarea
              name="message"
              rows={5}
              minLength={10}
              maxLength={2000}
              required
              defaultValue={
                params.get("plan")
                  ? `Me interesa el plan ${params.get("plan")}. `
                  : ""
              }
            />
          </label>
          {status === "error" && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button className="btn" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          </button>
        </>
      )}
    </form>
  );
};
