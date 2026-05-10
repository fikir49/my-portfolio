import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/30">
            <Image
              src="/images/me.jpg"
              alt="Fikir Wendimnew"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-text-primary">
          Fikir Wendimnew Kassa
        </h1>

        <p className="mb-8 text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Information Systems Student at Bahir Dar University. Focused on System Architecture, Data Integrity, and Decentralized Mobile Development.
        </p>

        {/* CTA Buttons - Fixed Routing */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-tech-green text-tech-black font-semibold rounded-lg hover:bg-tech-cyan transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="/resume"
            className="px-8 py-3 border border-tech-border text-text-primary font-semibold rounded-lg hover:border-tech-green hover:text-tech-green transition-colors duration-200"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-tech-border text-text-primary font-semibold rounded-lg hover:border-tech-green hover:text-tech-green transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}// Build Trigger: Sun May 10 07:27:11 UTC 2026
// Force Build: Sun May 10 07:32:06 UTC 2026
