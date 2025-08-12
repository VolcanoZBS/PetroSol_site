import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Calendar, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactUsSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    topic: "",
    message: "",
    consent: false,
    website: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as any;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // spam trap
    if (!form.name || !form.email || !form.message || !form.consent) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // TODO: integrate your backend or Formspree. Simulate for now:
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        topic: "",
        message: "",
        consent: false,
        website: "",
      });
    }, 900);
  };

  const focusForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus({ preventScroll: true });
  };

  return (
    <section id="contact" className="mt-16 md:mt-24 mb-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Hai să discutăm</h2>
          <p className="mt-2 text-gray-600">
            Contactează-ne pentru informații suplimentare sau programează o demonstrație.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Info card */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 self-start">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact direct</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+40738100070" className="text-gray-800 hover:text-blue-700">
                  +40 738 100 070
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:contact@petrosol.ro" className="text-gray-800 hover:text-blue-700">
                  contact@petrosol.ro
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">București, România</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Luni-Vineri, 09:00-18:00</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
            {status === "success" ? (
              <div className="mb-6 flex items-start gap-3 rounded-lg bg-emerald-50 text-emerald-800 p-4">
                <CheckCircle2 className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Mulțumim! Mesajul a fost trimis.</p>
                  <p className="text-sm">Revenim în cel mai scurt timp.</p>
                </div>
              </div>
            ) : status === "error" ? (
              <div className="mb-6 flex items-start gap-3 rounded-lg bg-red-50 text-red-700 p-4">
                <AlertCircle className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Te rugăm să completezi câmpurile obligatorii.</p>
                  <p className="text-sm">Nume, Email, Mesaj și consimțământ.</p>
                </div>
              </div>
            ) : null}

            <form ref={formRef} onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nume
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Companie
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                    Interesat de
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Alege...</option>
                    <option value="retail">Retail (stații carburanți, HoReCa)</option>
                    <option value="distributie">Distribuție carburanți / carduri flotă</option>
                    <option value="industrial">Operațiuni industriale</option>
                    <option value="alt">Alt subiect</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subiect (opțional)
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <label className="flex items-start gap-2 text-sm text-gray-600 mb-4">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={onChange}
                  className="mt-1"
                />
                <span>Sunt de acord ca PetroSol să mă contacteze în legătură cu acest mesaj.</span>
              </label>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  sau scrie-ne la{" "}
                  <a className="text-blue-600 hover:text-blue-700" href="mailto:contact@petrosol.ro">
                    contact@petrosol.ro
                  </a>
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Trimitere...
                    </>
                  ) : (
                    "Trimite mesaj"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
