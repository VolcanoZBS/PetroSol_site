import React, { useState, useRef } from "react";
import { Phone, Mail, Clock, Building2, ArrowRight, Check, AlertCircle } from "lucide-react";
// import emailjs from "@emailjs/browser"; // <- de-comentează după ce instalezi: npm i @emailjs/browser
import { useTranslation } from "react-i18next";

type Errors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
};

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");

  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (fd: FormData) => {
    const er: Errors = {};
    const name = ((fd.get("name") as string) || "").trim();
    const email = ((fd.get("email") as string) || "").trim();
    const subject = ((fd.get("subject") as string) || "").trim();
    const message = ((fd.get("message") as string) || "").trim();
    const consent = fd.get("consent");

    if (!name) er.name = t("validation.required");
    if (!email) er.email = t("validation.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) er.email = t("validation.email");
    if (!subject) er.subject = t("validation.required");
    if (!message) er.message = t("validation.required");
    if (!consent) er.consent = t("validation.consent");

    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSent(false);
    const fd = new FormData(formRef.current!);
    if (!validate(fd)) return;

    setSending(true);
    try {
      // TODO: Integrează EmailJS:
      /*
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fd.get("name"),
          company: fd.get("company"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          subject: fd.get("subject"),
          message: fd.get("message"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      */
      await new Promise(r => setTimeout(r, 800)); // simulare
      formRef.current?.reset();
      setSent(true);
      setErrors({});
    } catch {
      setServerError(t("form.submit.error"));
    } finally {
      setSending(false);
      setTimeout(() => setSent(false), 4000);
    }
  };

  const fieldClass = (hasError?: boolean) =>
    `w-full rounded-lg border px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 ${
      hasError ? "border-red-400" : "border-gray-300"
    }`;

  const stats = t("info.stats", { returnObjects: true }) as { label: string; value: string }[];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white ring-1 ring-blue-100 p-6 md:p-10 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{t("hero.title")}</h1>
        <p className="mt-3 text-gray-700 max-w-2xl">
          {t("hero.text")}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-14">
        {/* Info */}
        <section aria-labelledby="contact-info" className="bg-white rounded-2xl ring-1 ring-gray-200 p-6 md:p-8 flex flex-col">
          <h2 id="contact-info" className="text-xl font-semibold text-gray-900">{t("info.title")}</h2>
          <ul className="mt-6 space-y-5 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="mt-0.5 text-blue-600"><Building2 className="w-5 h-5" /></span>
              <div>
                <p className="font-medium text-gray-900">{t("info.address.title")}</p>
                <address className="not-italic leading-relaxed">
                  {t("info.address.line1")}<br />{t("info.address.line2")}
                </address>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-blue-600"><Phone className="w-5 h-5" /></span>
              <div>
                <p className="font-medium text-gray-900">{t("info.phone.title")}</p>
                <a href="tel:+40738100070" className="text-blue-600 hover:underline">+40 738 100 070</a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-blue-600"><Mail className="w-5 h-5" /></span>
              <div>
                <p className="font-medium text-gray-900">{t("info.email.title")}</p>
                <a href="mailto:office@petrosol.ro" className="text-blue-600 hover:underline">office@petrosol.ro</a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-blue-600"><Clock className="w-5 h-5" /></span>
              <div>
                <p className="font-medium text-gray-900">{t("info.hours.title")}</p>
                <p>{t("info.hours.value")}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {stats.map(i => (
              <div key={i.label} className="rounded-lg bg-blue-50 py-3 ring-1 ring-blue-100">
                <div className="text-sm font-semibold text-gray-900">{i.value}</div>
                <div className="text-[11px] tracking-wide text-blue-700">{i.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section aria-labelledby="contact-form" className="bg-white rounded-2xl ring-1 ring-gray-200 p-6 md:p-8">
          <h2 id="contact-form" className="text-xl font-semibold text-gray-900">{t("form.title")}</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.fields.name")} *</label>
                <input name="name" className={fieldClass(!!errors.name)} aria-invalid={!!errors.name} />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.fields.company")}</label>
                <input name="company" className={fieldClass()} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.fields.email")} *</label>
                <input name="email" type="email" className={fieldClass(!!errors.email)} aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.fields.phone")}</label>
                <input name="phone" className={fieldClass()} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.fields.subject")} *</label>
              <input name="subject" className={fieldClass(!!errors.subject)} aria-invalid={!!errors.subject} />
              {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t("form.fields.message")} *</label>
              <textarea name="message" rows={6} className={fieldClass(!!errors.message) + " resize-y"} aria-invalid={!!errors.message} />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className={`mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${errors.consent ? "border-red-400 ring-red-400" : ""}`}
                aria-invalid={!!errors.consent}
              />
              <label htmlFor="consent" className="text-xs text-gray-600">
                {t("form.consentText")}
              </label>
            </div>
            {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}

            {serverError && (
              <div className="flex items-center gap-2 text-sm text-red-600">
                <AlertCircle className="w-4 h-4" /> {serverError}
              </div>
            )}
            {sent && !serverError && (
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <Check className="w-4 h-4" /> {t("form.submit.success")}
              </div>
            )}

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 disabled:opacity-60 transition"
              >
                {sending && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
                {!sending && !sent && <>
                  {t("form.submit.default")} <ArrowRight className="w-4 h-4" />
                </>}
                {sending && t("form.submit.sending")}
                {sent && !sending && <>
                  {t("form.submit.sent")} <Check className="w-4 h-4" />
                </>}
              </button>
            </div>
          </form>
          <p className="mt-6 text-[11px] text-gray-500">
            {t("note")}
          </p>
        </section>
      </div>

      <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
        <div className="aspect-[16/6] md:aspect-[16/4]">
          <iframe
            title={t("map.title")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.228658000439!2d26.089681576048086!3d44.46948557107517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20258ac275fb9%3A0xad29b7dc896685d2!2sPetrol%20Solutions%20-%20PetroSol!5e0!3m2!1sro!2sro!4v1754040794988!5m2!1sro!2sro"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PetroSol",
            url: "https://petrosol.ro",
            telephone: "+40738100070",
            email: "office@petrosol.ro",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bulevardul Primăverii 51",
              addressLocality: "București",
              addressCountry: "RO"
            }
          })
        }}
      />
    </main>
  );
};

export default Contact;
