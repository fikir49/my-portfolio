'use client';
import Image from 'next/image';

export default function ResumePage() {
  const skillsList = [
    { name: "C# / .NET / SQL", level: 90 },
    { name: "Database Design", level: 85 },
    { name: "Flutter / Dart (Mobile)", level: 90 },
    { name: "Next.js / Tailwind (Web)", level: 85 },
    { name: "P2P Architecture", level: 75 },
    { name: "Security & Encryption", level: 80 }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto shadow-2xl min-h-screen bg-white">
        
        {/* SIDEBAR: The 'Professional' Green */}
        <aside className="w-full md:w-[320px] bg-[#0c4e3e] p-10 text-white shrink-0">
          <div className="text-center mb-10">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
              <Image 
                src="/images/me.jpg" 
                alt="Fikir Wendimnew Kassa" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-6 text-2xl font-light tracking-tight">Fikir Wendimnew</h1>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">IS Student @ BiT</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/90 border-b border-white/10 pb-2">Contact</h2>
              <div className="mt-4 space-y-3 text-xs text-white/70 font-light">
                <p>Bahir Dar, Ethiopia</p>
                <a href="tel:+251909265966" className="block hover:text-white transition-colors">+251 909 265 966</a>
                <a href="mailto:fikirwendmnewkassa@gmail.com" className="block hover:text-white break-all">fikirwendmnewkassa@gmail.com</a>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/90 border-b border-white/10 pb-2">Skills</h2>
              <div className="mt-6 space-y-4">
                {skillsList.map((skill) => (
                  <div key={skill.name}>
                    <p className="text-[11px] font-medium text-white/80 uppercase mb-2">{skill.name}</p>
                    <div className="h-[2px] w-full bg-white/10">
                      <div className="h-full bg-white/60" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* MAIN: The Clean Content Area */}
        <main className="flex-1 p-10 md:p-16 space-y-12 bg-white">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#0c4e3e] mb-4">Profile</h2>
            <p className="text-sm leading-relaxed text-slate-600 font-normal">
              Information Systems student at Bahir Dar University. Expert in C# and SQL development with a focus on decentralized data security. Currently researching peer-to-peer sharding and AES-256 encryption for academic integrity systems.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#0c4e3e] mb-8">Projects</h2>
            <div className="space-y-10">
              <div className="group">
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#0c4e3e] transition-colors">Academia Vault: Security System</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-1">P2P // Steganography // AES-256</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Developed a decentralized research repository using packet sharding. Implemented LSB steganography to ensure academic data sovereignty across distributed peer nodes.
                </p>
              </div>

              <div className="group">
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#0c4e3e] transition-colors">FiscalAPro: Data Architecture</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-1">Flutter // SQL Server // Cash-Flow Logic</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Engineered secure local-to-cloud data bridging for financial intelligence. Focused on real-time transaction categorization and optimized SQL query performance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#0c4e3e] mb-4">Education</h2>
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase">BSc Information Systems</h3>
              <p className="text-xs text-slate-500 mt-1">Bahir Dar Institute of Technology (BiT)</p>
              <p className="text-[10px] text-slate-400 mt-2 font-mono italic">Expected 2027</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}