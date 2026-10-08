import { Mail, MessageCircle, Phone } from 'lucide-react';
import type { PageId } from '../../types';
import { buildWhatsAppUrl, CONTACT, HOME } from '../../data/site';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

interface ClosingInvitationProps {
  onNavigate: (page: PageId) => void;
}

export function ClosingInvitation({ onNavigate }: ClosingInvitationProps) {
  return (
    <section className="relative isolate overflow-hidden bg-paper-3 py-24 lg:py-32">
      <img
        src="/images/field/field-07-full.webp"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-paper/80" aria-hidden />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Closing message</p>

          <blockquote className="mt-8">
            <p className="font-display text-[clamp(1.7rem,4vw,2.9rem)] leading-[1.16] text-pine">
              &ldquo;{HOME.closing}&rdquo;
            </p>
          </blockquote>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => onNavigate('contact')} withArrow>
              Contact us
            </Button>
            <Button variant="outline" onClick={() => onNavigate('about')}>
              Know more
            </Button>
          </div>
        </Reveal>

        {/* Three direct routes, for people who would rather not fill in a form. */}
        <Reveal
          delay={0.1}
          className="mx-auto mt-16 grid max-w-3xl gap-px overflow-hidden border border-line-strong bg-line-strong sm:grid-cols-3"
        >
          <div className="flex flex-col gap-2 bg-paper p-7">
            <Phone className="h-4 w-4 text-clay" aria-hidden />
            <span className="eyebrow">Call</span>
            {[CONTACT.phonePrimary, CONTACT.phoneSecondary].map((phone) => (
              <a
                key={phone.dial}
                href={`tel:${phone.dial}`}
                className="link-rule self-start text-[15px] text-pine"
              >
                {phone.display}
              </a>
            ))}
          </div>

          <a
            href={buildWhatsAppUrl(
              'Hello Crop Care Bio Solutions, I would like to know more about your pheromone lures and traps.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 bg-paper p-7 transition-colors hover:bg-paper-2"
          >
            <MessageCircle className="h-4 w-4 text-clay" aria-hidden />
            <span className="eyebrow">WhatsApp</span>
            <span className="text-[15px] text-pine">Message our team</span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex flex-col gap-2 bg-paper p-7 transition-colors hover:bg-paper-2"
          >
            <Mail className="h-4 w-4 text-clay" aria-hidden />
            <span className="eyebrow">Email</span>
            <span className="break-all text-[15px] text-pine">{CONTACT.email}</span>
          </a>
        </Reveal>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
          {CONTACT.hours}
        </p>
      </div>
    </section>
  );
}
