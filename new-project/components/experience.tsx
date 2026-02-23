import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-anchor">
      <div className="container-shell section-shell border-t border-white/5">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="End-to-end data engineering across banking and life sciences"
            description="A timeline of production work focused on data freshness, scalable transformation layers, and dependable analytics delivery."
          />
        </Reveal>

        <div className="relative mt-10">
  <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/70 via-white/10 to-transparent md:left-1/2" />

  <div className="space-y-8">
    {portfolio.experience.map((role, index) => {
      const isRight = index % 2 === 1;

      return (
        <Reveal key={`${role.company}-${role.period}`} delay={(index % 3) as 0 | 1 | 2}>
          <article className="relative md:grid md:grid-cols-2 md:gap-8">
            <div className="absolute left-4 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-ink md:left-1/2" />

            <div
              className={`ml-10 panel p-6 sm:p-7 md:ml-0 ${isRight ? "md:col-start-2" : ""}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                  <p className="mt-1 text-sm text-slate-200">{role.company}</p>
                  <p className="mt-1 text-sm text-slate-400">{role.location}</p>
                </div>
                <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {role.period}
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">{role.summary}</p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      );
    })}
  </div>
</div>
