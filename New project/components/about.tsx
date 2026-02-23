import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="section-anchor">
      <div className="container-shell section-shell border-t border-white/5">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Building reliable data products for analytics teams"
            description="I work at the intersection of platform engineering and analytics enablement, with a strong focus on performance, testability, and stakeholder adoption."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={1}>
            <div className="panel p-7 sm:p-8">
              <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
                {portfolio.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <aside className="panel p-7 sm:p-8">
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-soft">
                Education
              </p>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {portfolio.education.degree}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {portfolio.education.institution}
              </p>
              <p className="mt-1 text-sm text-slate-400">{portfolio.education.date}</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-soft">
                  Strengths
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>Streaming-first architecture thinking</li>
                  <li>Analytics-ready modeling and warehouse performance tuning</li>
                  <li>Data quality checks embedded in engineering delivery workflows</li>
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
