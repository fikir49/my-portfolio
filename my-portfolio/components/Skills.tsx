export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["C#", "Dart", "SQL", "TypeScript"],
    },
    {
      name: "Frameworks",
      skills: [".NET", "Flutter", "Next.js 16"],
    },
    {
      name: "Expertise",
      skills: ["System Architecture", "Data Integrity (AES-256)", "P2P Networking"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-tech-dark/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-text-primary">
          Skills & Expertise
        </h2>
        <p className="text-text-secondary mb-12 max-w-2xl">
          Focused on secure architecture, resilient data systems, and modern full-stack engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_-40px_rgba(0,255,65,0.6)] transition-all duration-300 hover:border-tech-cyan hover:shadow-tech-glow-cyan"
            >
              <h3 className="text-lg font-bold text-tech-cyan mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-text-secondary hover:text-text-primary transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
