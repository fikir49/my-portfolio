'use client';
import Image from 'next/image';

export default function ResumePage() {
  const skillsList = [
    { name: "C# / .NET / SQL Server", level: 90 },
    { name: "Database Architecture", level: 85 },
    { name: "Flutter / Dart (Mobile)", level: 90 },
    { name: "Next.js / Tailwind (Web)", level: 85 },
    { name: "P2P Systems & Sharding", level: 75 },
    { name: "Cybersecurity & AES-256", level: 80 }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-900 font-sans antialiased">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] min-h-screen bg-white">
        
        {/* SIDEBAR: Deep Professional Emerald */}
        <aside className="w-full md:w-[340px] bg-[#063b2f] p-10 text-white shrink-0">
          <div className="text-center mb-12">
            <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-1 group hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/re_pho.jpg" 
                alt="Fikir Wendimnew Kassa" 
                fill 
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                priority
              />
            </div>
            <h1 className="mt-8 text-3xl font-black tracking-tight leading-none uppercase">Fikir<br/>Wendimnew</h1>
            <div className="mt-4 inline-block px-3 py-1 bg-white/10 rounded text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-black">
              Information Systems
            </div>
          </div>

          <div className="space-y-12">
            {/* CONTACTS: Added GitHub & LinkedIn */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-400 mb-6 flex items-center gap-2">
                Contact <span className="h-[1px] flex-1 bg-white/10"></span>
              </h2>
              <div className="space-y-5 text-[13px] font-medium text-white/80">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-white/40 mb-1">Phone</span>
                  <a href="tel:+251909265966" className="hover:text-emerald-400 transition-colors">+251 909 265 966</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-white/40 mb-1">Email</span>
                  <a href="mailto:fikirwendmnewkassa@gmail.com" className="hover:text-emerald-400 break-all transition-colors">fikirwendmnewkassa@gmail.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-white/40 mb-1">GitHub</span>
                  <a href="https://github.com/fikir49" target="_blank" className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/30 underline-offset-4">github.com/fikir49</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-white/40 mb-1">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/fikir-wendmnew-kassa-92574b324" target="_blank" className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/30 underline-offset-4">linkedin.com/in/fikir-wendmnew</a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-400 mb-6 flex items-center gap-2">
                Tech Stack <span className="h-[1px] flex-1 bg-white/10"></span>
              </h2>
              <div className="space-y-6">
                {skillsList.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-[11px] font-bold uppercase mb-2 tracking-wider">
                      <span>{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] w-full bg-white/5 rounded-full">
                      <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* MAIN AREA: Approachable & Readable */}
        <main className="flex-1 p-12 md:p-20 space-y-16 bg-white">
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 mb-6">01 // Profile</h2>
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              I am an Information Systems student at Bahir Dar University with a deep focus on <span className="text-[#063b2f] font-bold">system integrity and data security.</span> My work centers on building decentralized architectures that prioritize user privacy and resilient database logic.
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10">02 // Key Projects</h2>
            <div className="space-y-12">
              <div className="group relative pl-8 border-l-2 border-slate-100 hover:border-[#063b2f] transition-all">
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#063b2f] rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:translate-x-2 transition-transform">Academia Vault: Security System</h3>
                <p className="text-xs text-emerald-600 font-black uppercase mt-1 tracking-widest">P2P // Steganography // AES-256</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-500 font-normal">
                  Engineered a decentralized research repository utilizing packet sharding to prevent centralized data leaks. Integrated AES-256 encryption with LSB steganography to ensure academic documents remain sovereign and tamper-proof across peer nodes.
                </p>
              </div>

              <div className="group relative pl-8 border-l-2 border-slate-100 hover:border-[#063b2f] transition-all">
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#063b2f] rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:translate-x-2 transition-transform">FiscalAPro: Data Architecture</h3>
                <p className="text-xs text-emerald-600 font-black uppercase mt-1 tracking-widest">Flutter // SQL Server // Data Bridging</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-500 font-normal">
                  Designed a mobile-first financial intelligence engine. Focused on secure local-to-cloud synchronization and optimized SQL queries to handle complex real-time transaction categorization without latency.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 p-10 rounded-2xl border-l-4 border-[#063b2f]">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">03 // Education</h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-slate-900">BSc Information Systems</h3>
                <p className="text-sm font-semibold text-slate-500 mt-1">Bahir Dar Institute of Technology (BiT)</p>
              </div>
              <p className="text-xs font-black text-emerald-600 bg-white px-3 py-1 rounded shadow-sm">CLASS OF 2027</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}