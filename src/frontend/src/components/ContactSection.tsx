import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import type { backendInterface } from "../backend";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Props {
  actor: backendInterface | null;
}

const serviceOptions = [
  "Portrait Photography",
  "Wedding",
  "Videography",
  "Commercial",
  "Other",
];

export default function ContactSection({ actor }: Props) {
  useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setErrorMsg("Studio connection unavailable. Please try again.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await actor.submitForm(
        form.name,
        form.email,
        form.phone,
        form.service,
        form.message,
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again shortly.");
      setStatus("error");
    }
  };

  const labelStyle = {
    color: "var(--silver)",
    fontSize: "9px",
    letterSpacing: "0.3em",
  };

  return (
    <section
      id="contact"
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Subtle grain on section bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 100%, oklch(0.10 0.007 50 / 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal text-center">
          <p
            className="text-[10px] tracking-[0.38em] uppercase font-medium mb-3"
            style={{ color: "var(--silver)" }}
          >
            Let&apos;s Create Together
          </p>
          <h2
            className="section-title centered font-display font-black leading-none tracking-tight mb-5"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(2.2rem, 7vw, 4rem)",
              letterSpacing: "-0.025em",
            }}
          >
            BOOK A SESSION
          </h2>
          <p
            className="leading-relaxed mx-auto"
            style={{
              color: "var(--silver)",
              maxWidth: "420px",
              fontSize: "0.9rem",
            }}
          >
            Ready to create something cinematic together? Let&apos;s talk.
          </p>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div
            data-ocid="contact.success_state"
            className="text-center py-20 reveal"
          >
            <div
              className="inline-flex items-center justify-center w-20 h-20 border mb-8"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              <CheckCircle size={32} strokeWidth={1.5} />
            </div>
            <h3
              className="font-display font-bold text-2xl mb-3 tracking-tight"
              style={{ color: "var(--cream)" }}
            >
              Inquiry Sent
            </h3>
            <p
              className="text-sm mb-10"
              style={{ color: "var(--silver)", lineHeight: "1.7" }}
            >
              We&apos;ll be in touch within 24 hours to discuss your vision.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-8 py-3 text-[10px] font-semibold tracking-[0.22em] uppercase border transition-all duration-250"
              style={{
                borderColor: "oklch(0.22 0.010 52)",
                color: "var(--silver)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--gold)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "oklch(0.22 0.010 52)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--silver)";
              }}
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal space-y-7" noValidate>
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block uppercase font-medium mb-2"
                  style={labelStyle}
                  htmlFor="contact-name"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  data-ocid="contact.input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="form-input w-full px-4 py-3.5 text-sm"
                />
              </div>
              <div>
                <label
                  className="block uppercase font-medium mb-2"
                  style={labelStyle}
                  htmlFor="contact-email"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="form-input w-full px-4 py-3.5 text-sm"
                />
              </div>
            </div>

            {/* Phone + Service row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block uppercase font-medium mb-2"
                  style={labelStyle}
                  htmlFor="contact-phone"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="form-input w-full px-4 py-3.5 text-sm"
                />
              </div>
              <div>
                <label
                  className="block uppercase font-medium mb-2"
                  style={labelStyle}
                  htmlFor="contact-service"
                >
                  Service *
                </label>
                <select
                  id="contact-service"
                  data-ocid="contact.select"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3.5 text-sm appearance-none cursor-pointer"
                >
                  <option
                    value=""
                    disabled
                    style={{
                      backgroundColor: "oklch(0.09 0.007 50)",
                      color: "oklch(0.42 0.007 78)",
                    }}
                  >
                    Select a service
                  </option>
                  {serviceOptions.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      style={{
                        backgroundColor: "oklch(0.10 0.007 50)",
                        color: "var(--cream)",
                      }}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="block uppercase font-medium mb-2"
                style={labelStyle}
                htmlFor="contact-message"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                data-ocid="contact.textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your vision, project, or occasion..."
                className="form-input w-full px-4 py-3.5 text-sm resize-y"
                style={{ minHeight: "140px" }}
              />
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, oklch(0.22 0.010 52), transparent)",
              }}
            />

            {/* Error state */}
            {status === "error" && (
              <div
                data-ocid="contact.error_state"
                className="flex items-start gap-3 p-4"
                style={{
                  borderLeft: "2px solid oklch(0.55 0.22 25)",
                  backgroundColor: "oklch(0.577 0.245 27.325 / 0.08)",
                  color: "oklch(0.78 0.14 25)",
                }}
              >
                <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-snug">{errorMsg}</span>
              </div>
            )}

            {/* Submit */}
            <div className="flex items-center justify-between">
              <p
                className="text-[9px] tracking-[0.25em] uppercase"
                style={{ color: "oklch(0.32 0.008 78)" }}
              >
                * Required fields
              </p>
              <button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={status === "loading"}
                className="btn-gold px-10 py-4 text-[11px] font-semibold tracking-[0.22em] uppercase inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={
                  status === "loading"
                    ? { transform: "none", boxShadow: "none" }
                    : undefined
                }
              >
                {status === "loading" && (
                  <Loader2 size={14} className="animate-spin" />
                )}
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
