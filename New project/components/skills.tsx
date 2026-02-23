import { portfolio } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="section-anchor">
      <div className="container-shell section-shell border-t border-white/5">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and platforms I use to deliver production data systems"
            description="A recruiter-friendly snapshot of my core stack across engineering, cloud platforms, orchestration, transformation, and analytics."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skills.map((group, index) => (
            <Reveal key={group.category} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <div className="panel h-full p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
