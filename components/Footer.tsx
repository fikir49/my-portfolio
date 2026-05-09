export function Footer() {
  return (
    <footer className="border-t border-tech-border bg-tech-dark py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-text-secondary text-sm mb-4 md:mb-0">
            <p>© 2026 Sovereign Engineer. All rights reserved.</p>
            <p>Information Systems, Bahir Dar University</p>
          </div>
          <div className="text-text-secondary text-sm">
            <p>Built with <span className="text-tech-green">♦</span> using Next.js, React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
