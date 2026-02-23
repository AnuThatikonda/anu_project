import { portfolio } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-shell flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <p>Data Engineer • Real-time pipelines • Cloud data platforms</p>
      </div>
    </footer>
  );
}
