import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark tech palette
        'tech-black': '#0a0a0a',
        'tech-dark': '#0f0f0f',
        'tech-surface': '#1a1a1a',
        'tech-border': '#2a2a2a',
        'tech-highlight': '#333333',
        'tech-green': '#00ff41',
        'tech-cyan': '#0ff7ff',
        'tech-purple': '#b000ff',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00ff41 0%, #0ff7ff 100%)',
      },
      boxShadow: {
        'tech-glow': '0 0 30px rgba(0, 255, 65, 0.1)',
        'tech-glow-cyan': '0 0 30px rgba(15, 247, 255, 0.1)',
        'tech-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      borderColor: {
        'tech': '#2a2a2a',
      },
      animation: {
        'pulse-tech': 'pulse-tech 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'marquee': 'marquee 24s linear infinite',
      },
      keyframes: {
        'pulse-tech': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 255, 65, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 255, 65, 0.8)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e0e0e0',
            a: {
              color: '#00ff41',
              '&:hover': {
                color: '#0ff7ff',
              },
            },
            code: {
              color: '#00ff41',
              backgroundColor: '#1a1a1a',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            },
            pre: {
              backgroundColor: '#0f0f0f',
              borderColor: '#2a2a2a',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
