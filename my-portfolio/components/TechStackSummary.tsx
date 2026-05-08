export function TechStackSummary() {
  const items = [
    'C# / .NET',
    'Flutter',
    'SQL Server',
    'Next.js',
    'System Architecture',
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-black/20 p-8 shadow-[0_30px_80px_-60px_rgba(0,255,65,0.3)] backdrop-blur-xl">
        <p className="text-sm text-text-secondary mb-4">Primary technical focus for the internship.</p>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-primary">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
