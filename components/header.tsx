export function Header() {
  return (
    <header className="bg-background/90 border-b border-foreground/30 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/teras-mark.png" alt="" className="h-8" />
            <img src="/teras-logo.svg" alt="TERAS" className="h-6" />
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <a href="#philosophy" className="nav-mono">
              Philosophy
            </a>
            <a href="#methodology" className="nav-mono">
              Methodology
            </a>
            <a href="#services" className="nav-mono">
              Services
            </a>
            <a href="#contact" className="nav-mono">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
