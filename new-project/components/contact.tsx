import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="section-anchor">
      <div className="container-shell section-shell border-t border-white/5">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Open to data engineering opportunities and technical conversations"
            description="If you are hiring for data platform, streaming, ELT, or analytics engineering roles, feel free to reach out."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={1}>
            <div className="panel relative overflow-hidden p-7 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-glow via-transparent to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white">
                  Let&apos;s build reliable data systems that scale
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  I bring hands-on experience delivering low-latency ingestion pipelines,
                  analytics-ready warehouse models, and data quality automation in regulated and
                  high-volume environments. I am currently based in Los Angeles and open to remote
                  or relocation opportunities.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${portfolio.email}`}
                    className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
                  >
                    Email {portfolio.name.split(" ")[0]}
                  </a>
                  <a
                    href={`tel:${portfolio.phone.replace(/[()\s-]/g, "")}`}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent/40 hover:bg-accent-glow"
                  >
                    Call {portfolio.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="panel p-7 sm:p-8">
              <div className="space-y-5">
                <div>
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-soft">
                    Email
                  </p>
                  <a
                    href={`mailto:${portfolio.email}`}
                    className="mt-2 inline-block text-sm text-slate-200 transition hover:text-white"
                  >
                    {portfolio.email}
                  </a>
                </div>

                <div>
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-soft">
                    Phone
                  </p>
                  <a
                    href={`tel:${portfolio.phone.replace(/[()\s-]/g, "")}`}
                    className="mt-2 inline-block text-sm text-slate-200 transition hover:text-white"
                  >
                    {portfolio.phone}
                  </a>
                </div>

                <div>
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-soft">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {portfolio.location} • {portfolio.relocation}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
