"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success";

export default function ContactFormButton({
  variant = "primary",
}: {
  variant?: "primary" | "ghost";
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [nome, setNome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Body scroll lock + focus + escape
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
      const t = setTimeout(() => firstInputRef.current?.focus(), 50);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        clearTimeout(t);
        window.removeEventListener("keydown", onKey);
        document.body.classList.remove("no-scroll");
      };
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  const reset = () => {
    setNome("");
    setTelefono("");
    setEmail("");
    setStatus("idle");
  };

  const close = () => {
    setOpen(false);
    // small delay so the user doesn't see the form flicker back during the close animation
    setTimeout(reset, 400);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !telefono.trim() || !email.trim()) return;

    setStatus("submitting");

    const body = encodeURIComponent(
      `Salve,\n\nVorrei prenotare una visita presso lo showroom di Via Durini 17.\n\nNome completo: ${nome}\nTelefono: ${telefono}\nEmail: ${email}\n\nGrazie.`
    );
    const subject = encodeURIComponent("Richiesta visita showroom — Binova Milano");
    window.location.href = `mailto:info@binovamilano.it?subject=${subject}&body=${body}`;

    // Show success UI almost immediately — the mailto opens the user's client
    setTimeout(() => setStatus("success"), 300);
  };

  const buttonCls =
    variant === "primary"
      ? "group flex items-center justify-between gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold max-md:w-full max-md:px-6"
      : "group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-binova-bone/70 hover:text-binova-bone transition-colors";

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={buttonCls}>
        Prenota una visita
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </button>

      {/* Modal */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[120] transition-[opacity,visibility] duration-300 ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={close}
          className="absolute inset-0 bg-binova-black/85 backdrop-blur-md"
        />

        {/* Centered card */}
        <div className="relative flex h-full w-full items-end justify-center sm:items-center sm:p-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            className={`relative flex w-full flex-col bg-binova-ink shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:max-w-[480px] sm:border sm:border-white/[0.06] ${
              open ? "translate-y-0" : "translate-y-8"
            }`}
            style={{
              paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
            }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center text-binova-bone/60 transition-colors hover:text-binova-bone"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>

            <div className="px-7 pt-12 sm:px-10 sm:pt-14">
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · Contatto
              </span>
              <h2
                id="contact-form-title"
                className="mt-3 font-display text-3xl font-light leading-[1.05] tracking-tight text-binova-bone sm:text-4xl"
              >
                Prenota una{" "}
                <span className="italic text-binova-gold-soft">visita.</span>
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-binova-bone/60">
                Lasciaci i tuoi recapiti, un nostro consulente ti
                ricontatterà entro 24 ore lavorative.
              </p>
            </div>

            {status === "success" ? (
              <div className="px-7 pb-2 pt-8 sm:px-10 sm:pt-10">
                <div className="border border-binova-gold/30 bg-binova-gold/5 px-6 py-8 text-center">
                  <span className="block text-[10px] uppercase tracking-[0.32em] text-binova-gold">
                    · Richiesta inviata
                  </span>
                  <p className="mt-4 font-display text-2xl font-light text-binova-bone">
                    Grazie, {nome.split(" ")[0] || "a presto"}.
                  </p>
                  <p className="mt-3 text-sm text-binova-bone/60">
                    Abbiamo ricevuto la tua richiesta. Ti ricontatteremo
                    entro 24 ore al numero che ci hai lasciato.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 flex w-full items-center justify-center gap-3 border border-binova-bone/30 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone hover:border-binova-gold hover:text-binova-gold transition-colors"
                >
                  Chiudi
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 px-7 pb-2 pt-8 sm:px-10 sm:pt-10"
                noValidate
              >
                <Field
                  label="Nome completo"
                  type="text"
                  value={nome}
                  onChange={setNome}
                  required
                  autoComplete="name"
                  inputRef={firstInputRef}
                />
                <Field
                  label="Numero di telefono"
                  type="tel"
                  value={telefono}
                  onChange={setTelefono}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                />
                <Field
                  label="Indirizzo email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                  autoComplete="email"
                  inputMode="email"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 flex items-center justify-between gap-4 border border-binova-bone/40 bg-binova-stone px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold disabled:opacity-50"
                >
                  {status === "submitting" ? "Invio in corso…" : "Invia richiesta"}
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Inviando accetti la nostra{" "}
                  <a
                    href="/privacy"
                    className="text-binova-gold-soft hover:text-binova-gold transition-colors"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
  autoComplete,
  inputMode,
  inputRef,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
  inputRef?: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/50">
        {label}
      </span>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="border-b border-binova-bone/20 bg-transparent py-2 text-binova-bone outline-none transition-colors focus:border-binova-gold"
        style={{ fontSize: "16px" }}
      />
    </label>
  );
}
