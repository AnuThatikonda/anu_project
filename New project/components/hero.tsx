import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="home" className="section-anchor">
      <div className="container-shell section-shell pb-14 sm:pb-16">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-soft/80 p-7 shadow-glow sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:28px_28px] opacity-20" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent-glow to-transparent" />

              <div className="relative">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-accent-soft">
                  Data Engineering Portfolio
                </p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {portfolio.name}
                </h1>
                <p className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
                  {portfolio.role}
                </p>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  {portfolio.heroSummary}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${portfolio.email}`}
                    className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#experience"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent/50 hover:bg-accent-glow"
                  >
                    View Experience
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={1}>
              <div className="panel p-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-soft">
                  Based In
                </p>
                <p className="mt-3 text-xl font-semibold text-white">{portfolio.location}</p>
                <p className="mt-2 text-sm text-slate-300">{portfolio.relocation}</p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="panel p-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-soft">
                  What I Focus On
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>Real-time and near-real-time data pipelines</li>
                  <li>Cloud data warehouses and dbt modeling layers</li>
                  <li>Data quality automation and CI/CD for analytics platforms</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="grid grid-cols-2 gap-4">
                {portfolio.metrics.map((metric) => (
                  <div key={metric.label} className="panel p-5">
                    <p className="text-xl font-semibold text-white sm:text-2xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
