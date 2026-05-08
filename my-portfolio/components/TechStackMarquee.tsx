export function TechStackMarquee() {
  const techItems = [
    "C#",
    "Dart",
    "SQL",
    "TypeScript",
    ".NET",
    "Flutter",
    "Next.js 16",
    "AES-256",
    "P2P Networking",
    "AI",
    "Finance",
    "System Architecture",
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_90px_-60px_rgba(0,255,65,0.35)] overflow-hidden">
        <div className="px-6 py-5 text-sm uppercase tracking-[0.35em] text-text-secondary border-b border-white/10">
          Tech Stack Marquee
        </div>
        <div className="relative overflow-hidden">
          <div className="flex min-w-full animate-marquee gap-8 py-6">
            {techItems.concat(techItems).map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex-shrink-0 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm font-medium text-text-primary shadow-[0_10px_30px_-20px_rgba(0,255,65,0.5)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
