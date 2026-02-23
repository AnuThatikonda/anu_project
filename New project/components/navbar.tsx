const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

type NavbarProps = {
  name: string;
};

export function Navbar({ name }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <a
          href="#home"
          className="text-sm font-semibold tracking-wide text-white transition hover:text-accent-soft"
        >
          {name}
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
