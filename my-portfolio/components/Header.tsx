export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tech-black/80 backdrop-blur-md border-b border-tech-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-text-primary">Fikir Wendimnew Kassa</div>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#projects" className="text-text-secondary hover:text-tech-green transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-text-secondary hover:text-tech-green transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="./resume.pdf" className="text-text-secondary hover:text-tech-green transition-colors">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="text-text-secondary hover:text-tech-green transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
