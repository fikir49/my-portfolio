export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-text-primary">
          Let&apos;s Connect
        </h2>
        <p className="text-text-secondary mb-12">
          Interested in discussing secure system design, collaboration opportunities, or just want to chat? Reach out!
        </p>

        <div className="space-y-4 mb-12">
          <a
            href="mailto:fikirwendmnewkassa@gmail.com"
            className="inline-block px-8 py-3 border border-tech-green text-tech-green font-semibold rounded-lg hover:bg-tech-green hover:text-tech-black transition-colors duration-200"
          >
            Send Email
          </a>
          <a
            href="tel:+251909265966"
            className="inline-block px-8 py-3 border border-tech-border text-text-primary font-semibold rounded-lg hover:border-tech-green hover:text-tech-green transition-colors duration-200"
          >
            Call Me
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/fikir49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-tech-green transition-colors"
            aria-label="GitHub Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/fikir-wendmnew-kassa-92574b324"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-tech-green transition-colors"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.82 0-9.737h3.554v1.378c.43-.664 1.202-1.609 2.923-1.609 2.136 0 3.74 1.39 3.74 4.38v5.588zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.954-1.71 1.184 0 1.915.754 1.94 1.71 0 .951-.756 1.71-1.979 1.71zm1.6 11.597H3.738V9.615h3.199v10.837zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.729C24 .774 23.204 0 22.224 0z" />
            </svg>
          </a>
          <a
            href="https://t.me/Shsh2005shsh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-tech-green transition-colors"
            aria-label="Telegram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
