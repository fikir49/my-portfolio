'use client';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 p-4 md:p-10 font-mono selection:bg-blue-100">
      {/* System Action Bar */}
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-6 print:hidden">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Interface: Production_Ready</span>
        </div>
        <button 
          onClick={() => window.print()}
          className="border-2 border-slate-900 px-6 py-1 text-xs font-black uppercase hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          Export_System_PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white border-2 border-slate-900 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.05)] print:shadow-none overflow-hidden">
        
        {/* Gradient Header Section: Distinct UI Border */}
        <header className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 md:p-12 border-b-4 border-blue-600">
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="relative w-32 h-32 border-4 border-white shadow-xl rounded-full overflow-hidden flex-shrink-0">
               <Image src="/images/me.jpg" alt="Fikir" fill className="object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">Fikir Wendimnew Kassa</h1>
              <p className="text-blue-400 font-bold text-sm mt-1 uppercase tracking-widest">Information Systems Student | BiT</p>
              
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                <a href="mailto:fikirwendmnewkassa@gmail.com" className="bg-white/10 hover:bg-white/20 text-white text-[10px] px-3 py-1 border border-white/20 transition-all">
                  EMAIL: fikirwendmnewkassa@gmail.com
                </a>
                <a href="tel:+251909265966" className="bg-white/10 hover:bg-white/20 text-white text-[10px] px-3 py-1 border border-white/20 transition-all">
                  CALL: +251 909 265 966
                </a>
              </div>
            </div>
          </div>
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Technical Diagnostics (Sidebar) */}
          <div className="md:col-span-4 bg-slate-50 p-8 border-r-2 border-slate-100 space-y-10">
            <section>
              <h2 className="text-xs font-black text-blue-600 mb-6 uppercase tracking-widest underline decoration-2 underline-offset-4">Skill_Tracker</h2>
              <div className="space-y-6 text-[11px]">
                <div>
                  <div className="flex justify-between mb-2"><span className="font-bold uppercase text-slate-500 underline decoration-slate-400 decoration-dotted underline-offset-2">C# / .NET</span><span className="font-black text-slate-900">INTERMEDIATE</span></div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-2 flex-1 border border-slate-900 ${i <= 3 ? 'bg-slate-900' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span className="font-bold uppercase text-slate-500 underline decoration-slate-400 decoration-dotted underline-offset-2">Flutter / Dart</span><span className="font-black text-slate-900">INTERMEDIATE</span></div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-2 flex-1 border border-slate-900 ${i <= 3 ? 'bg-slate-900' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span className="font-bold uppercase text-slate-500 underline decoration-slate-400 decoration-dotted underline-offset-2">SQL Server</span><span className="font-black text-slate-900">BEGINNER+</span></div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-2 flex-1 border border-slate-900 ${i <= 2 ? 'bg-slate-900' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span className="font-bold uppercase text-slate-500 underline decoration-slate-400 decoration-dotted underline-offset-2">Security</span><span className="font-black text-slate-900">LEARNING</span></div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-2 flex-1 border border-slate-900 ${i <= 2 ? 'bg-slate-900' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <h2 className="text-xs font-black text-slate-900 mb-4 uppercase italic">Education</h2>
              <p className="text-[11px] font-black uppercase">BSc Information Systems</p>
              <p className="text-[10px] text-slate-500 mt-1 font-bold">Bahir Dar Institute of Technology (BiT)</p>
              <p className="text-[10px] text-blue-600 mt-2 font-black">EXP_GRAD_2027</p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <h2 className="text-xs font-black text-slate-900 mb-4 uppercase italic">Links_Node</h2>
              <div className="text-[10px] space-y-3 font-bold uppercase">
                 <a href="https://t.me/Shsh2005shsh" className="block text-slate-500 hover:text-blue-600 transition-colors">Telegram: @Shsh2005shsh</a>
                 <a href="https://github.com/fikir49" className="block text-slate-500 hover:text-blue-600 transition-colors">GitHub: fikir49</a>
                 <a href="https://www.linkedin.com/in/fikir-wendmnew-kassa-92574b324" className="block text-slate-500 hover:text-blue-600 transition-colors">LinkedIn: Fikir Wendmnew</a>
              </div>
            </section>
          </div>

          {/* Applied Logic (Main) */}
          <div className="md:col-span-8 p-8 md:p-12 space-y-12 bg-white">
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8 flex items-center gap-4">
                01_System_Development <span className="flex-1 h-[1px] bg-slate-100"></span>
              </h2>
              
              <div className="space-y-12">
                <div className="relative pl-6 border-l-2 border-slate-100 hover:border-blue-600 transition-colors">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-white border border-slate-900"></div>
                  <h3 className="text-sm font-black uppercase tracking-tight">Academia Vault: Security System</h3>
                  <p className="text-[11px] text-slate-500 mt-3 leading-relaxed text-justify">
                    A peer-to-peer decentralized security research project. Implemented AES-256-GCM encryption and LSB steganography to shard data across distributed nodes, eliminating central server reliance and prioritizing data sovereignty.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-100 hover:border-blue-600 transition-colors">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-white border border-slate-900"></div>
                  <h3 className="text-sm font-black uppercase tracking-tight">FiscalAPro: Transaction Logic</h3>
                  <p className="text-[11px] text-slate-500 mt-3 leading-relaxed text-justify">
                    Financial intelligence application built on Flutter. Developed secure data streaming through local SQL Server logic to categorize raw financial input into actionable cash-flow intelligence and summaries.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-slate-900 p-8 border-l-8 border-blue-600">
              <h2 className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-3 italic">Student_Objective_Log</h2>
              <p className="text-[11px] text-white leading-relaxed font-medium italic opacity-90">
                "I am an Information Systems student at the Bahir Dar Institute of Technology (BiT) focused on the intersection of database architecture and distributed system security. Currently seeking a professional internship in Addis Ababa (May 2026) to solve complex technical challenges."
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-[8px] text-slate-400 uppercase tracking-widest font-black">
        End_of_Transmission // 2026_SOVEREIGN_SYSTEMS
      </footer>
    </div>
  );
}