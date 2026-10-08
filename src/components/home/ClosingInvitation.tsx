import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import type { PageId } from '../../types';
import { buildWhatsAppUrl, CONTACT, HOME } from '../../data/site';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

interface ClosingInvitationProps {
  onNavigate: (page: PageId) => void;
}

export function ClosingInvitation({ onNavigate }: ClosingInvitationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-paper-3 py-24 lg:py-32">
      {/* Seed, sweat and growing crop behind the closing line — a silent loop,
          or its first frame for visitors who ask for reduced motion. */}
      {reduceMotion ? (
        <img
          src="/videos/closing-message-poster.webp"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/closing-message-poster.webp"
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/videos/closing-message.webm" type="video/webm" />
          <source src="/videos/closing-message.mp4" type="video/mp4" />
        </video>
      )}
      {/* A light green tint, darkest behind the quote, so the video stays clear
          and the white text stays readable. */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,36,28,0.62)_0%,rgba(14,36,28,0.38)_55%,rgba(14,36,28,0.22)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-paper/80">Closing message</p>

          <blockquote className="mt-8">
            <p className="font-display text-[clamp(1.7rem,4vw,2.9rem)] leading-[1.16] text-paper [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
              &ldquo;{HOME.closing}&rdquo;
            </p>
          </blockquote>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <Button variant="onDark" onClick={() => onNavigate('contact')} withArrow>
              Contact us
            </Button>
            <Button variant="outlineOnDark" onClick={() => onNavigate('about')}>
              Know more
            </Button>
          </div>
        </Reveal>

        {/* Three direct routes, for people who would rather not fill in a form. */}
        <Reveal
          delay={0.1}
          className="mx-auto mt-16 grid max-w-3xl divide-y divide-white/40 overflow-hidden rounded-xl border border-white/60 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          <div className="flex flex-col gap-2 p-7">
            <Phone className="h-4 w-4 text-clay-soft" aria-hidden />
            <span className="eyebrow text-paper/75">Call</span>
            {[CONTACT.phonePrimary, CONTACT.phoneSecondary].map((phone) => (
              <a
                key={phone.dial}
                href={`tel:${phone.dial}`}
                className="link-rule self-start text-[15px] text-paper"
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
            className="group flex flex-col gap-2 p-7 transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-clay-soft" aria-hidden />
            <span className="eyebrow text-paper/75">WhatsApp</span>
            <span className="text-[15px] text-paper">Message our team</span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex flex-col gap-2 p-7 transition-colors hover:bg-white/10"
          >
            <Mail className="h-4 w-4 text-clay-soft" aria-hidden />
            <span className="eyebrow text-paper/75">Email</span>
            <span className="text-[14px] text-paper [overflow-wrap:anywhere]">{CONTACT.email}</span>
          </a>
        </Reveal>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-paper/85">
          {CONTACT.hours}
        </p>
      </div>
    </section>
  );
}
