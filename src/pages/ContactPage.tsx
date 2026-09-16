import { useEffect, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { InquiryForm, PageId } from '../types';
import { PRODUCTS } from '../data/products';
import { TRAPS } from '../data/traps';
import { buildWhatsAppUrl, CONTACT, ENQUIRER_TYPES } from '../data/site';
import { PageIntro } from '../components/layout/PageIntro';
import { Reveal } from '../components/ui/Reveal';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefillProduct?: string;
}

const EMPTY: InquiryForm = {
  name: '',
  phone: '',
  email: '',
  location: '',
  enquirerType: ENQUIRER_TYPES[0],
  product: '',
  acreage: '',
  message: '',
};

type Errors = Partial<Record<keyof InquiryForm, string>>;

const fieldClass =
  'w-full border border-line-strong bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-3 focus:border-pine focus:outline-none';

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow mb-2.5 block">
        {label}
        {required && <span className="ml-1 text-clay">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-[13px] text-clay" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactPage({ onNavigate, prefillProduct = '' }: ContactPageProps) {
  const [form, setForm] = useState<InquiryForm>({ ...EMPTY, product: prefillProduct });
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (prefillProduct) setForm((prev) => ({ ...prev, product: prefillProduct }));
  }, [prefillProduct]);

  const set = <K extends keyof InquiryForm>(key: K, value: InquiryForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};

    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!form.phone.trim()) {
      next.phone = 'We need a number to reach you on.';
    } else if (form.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'That does not look like a complete phone number.';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = 'Please check the email address.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /** One enquiry body, sent down whichever channel the visitor picks. */
  const composeMessage = () =>
    [
      'Enquiry from the Crop Care Bio Solutions website',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.location && `Location: ${form.location}`,
      `I am a: ${form.enquirerType}`,
      form.product && `Product of interest: ${form.product}`,
      form.acreage && `Area under crop: ${form.acreage}`,
      form.message && '',
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n');

  const sendOnWhatsApp = () => {
    if (!validate()) return;
    window.open(buildWhatsAppUrl(composeMessage()), '_blank', 'noopener,noreferrer');
  };

  const sendByEmail = () => {
    if (!validate()) return;
    const subject = form.product
      ? `Enquiry — ${form.product}`
      : 'Enquiry from the website';
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(composeMessage())}`;
  };

  const catalogue = [
    ...PRODUCTS.map((product) => product.name),
    ...TRAPS.map((trap) => trap.name),
  ];

  return (
    <>
      <PageIntro
        breadcrumb="Contact"
        eyebrow="Contact"
        title="Tell us what you grow."
        lead="Give us the crop, the acreage and what you are seeing in the field. Our team will come back with a protocol and a price."
        onNavigate={onNavigate}
      />

      <section className="bg-paper py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Direct channels */}
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="eyebrow">Reach us directly</h2>

                <ul className="mt-6 space-y-px bg-line">
                  <li>
                    <a
                      href={`tel:${CONTACT.phonePrimary.dial}`}
                      className="flex items-start gap-4 bg-paper p-6 transition-colors hover:bg-paper-2"
                    >
                      <Phone className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden />
                      <span>
                        <span className="eyebrow block">Phone</span>
                        <span className="mt-1.5 block text-[16px] text-pine">
                          {CONTACT.phonePrimary.display}
                        </span>
                        <span className="mt-1 block text-[13px] text-ink-3">
                          {CONTACT.hours}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={buildWhatsAppUrl(
                        'Hello Crop Care Bio Solutions, I would like to enquire about your pheromone lures and traps.',
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 bg-paper p-6 transition-colors hover:bg-paper-2"
                    >
                      <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden />
                      <span>
                        <span className="eyebrow block">WhatsApp</span>
                        <span className="mt-1.5 block text-[16px] text-pine">
                          Message our team
                        </span>
                        <span className="mt-1 block text-[13px] text-ink-3">
                          Usually the quickest way to reach us
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-start gap-4 bg-paper p-6 transition-colors hover:bg-paper-2"
                    >
                      <Mail className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden />
                      <span>
                        <span className="eyebrow block">Email</span>
                        <span className="mt-1.5 block break-all text-[16px] text-pine">
                          {CONTACT.email}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start gap-4 bg-paper p-6">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden />
                    <span>
                      <span className="eyebrow block">Address</span>
                      <span className="mt-1.5 block text-[16px] leading-snug text-pine">
                        {CONTACT.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                  </li>
                </ul>

                <p className="mt-8 border-l-2 border-clay pl-4 text-[14px] leading-relaxed text-ink-2">
                  Dealers and FPOs: ask for the bulk price list and the dealer margin
                  structure when you write in.
                </p>
              </div>
            </Reveal>

            {/* Enquiry form */}
            <Reveal delay={0.08} className="lg:col-span-8">
              <form
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  sendOnWhatsApp();
                }}
                className="border border-line bg-paper-2 p-6 sm:p-9"
              >
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] text-pine">
                  Request a quote
                </h2>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-2">
                  Fill this in and send it through whichever channel suits you. Nothing is
                  stored on this website — it goes straight to our team.
                </p>

                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" htmlFor="name" error={errors.name} required>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(event) => set('name', event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Full name"
                    />
                  </Field>

                  <Field label="Phone" htmlFor="phone" error={errors.phone} required>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => set('phone', event.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="+91"
                    />
                  </Field>

                  <Field label="Email" htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(event) => set('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="Optional"
                    />
                  </Field>

                  <Field label="District & state" htmlFor="location">
                    <input
                      id="location"
                      value={form.location}
                      onChange={(event) => set('location', event.target.value)}
                      className={fieldClass}
                      placeholder="Where is the farm?"
                    />
                  </Field>

                  <Field label="I am a" htmlFor="enquirerType">
                    <select
                      id="enquirerType"
                      value={form.enquirerType}
                      onChange={(event) => set('enquirerType', event.target.value)}
                      className={fieldClass}
                    >
                      {ENQUIRER_TYPES.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Area under crop" htmlFor="acreage">
                    <input
                      id="acreage"
                      value={form.acreage}
                      onChange={(event) => set('acreage', event.target.value)}
                      className={fieldClass}
                      placeholder="e.g. 5 acres"
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Product of interest" htmlFor="product">
                      <input
                        id="product"
                        list="catalogue"
                        value={form.product}
                        onChange={(event) => set('product', event.target.value)}
                        className={fieldClass}
                        placeholder="Start typing a lure or trap name"
                      />
                      <datalist id="catalogue">
                        {catalogue.map((name) => (
                          <option key={name} value={name} />
                        ))}
                      </datalist>
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="What are you seeing in the field?" htmlFor="message">
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(event) => set('message', event.target.value)}
                        className={`${fieldClass} resize-y`}
                        placeholder="Crop stage, the damage you are seeing, how much area is affected."
                      />
                    </Field>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-pine px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-pine-soft"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Send on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={sendByEmail}
                    className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-pine hover:text-pine"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    Send by email
                  </button>

                  <p className="text-[13px] leading-snug text-ink-3 sm:ml-2">
                    Opens WhatsApp or your mail app with the details filled in.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
