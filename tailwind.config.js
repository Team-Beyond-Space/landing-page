/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          primary: '#0ea5e9',      // Darker blue (was #00d4ff)
          secondary: '#0f766e',     // Darker teal (was #00a8cc)
          accent: '#c2185b',        // Darker pink (was #ff0080)
          dark: '#020617',          // Much darker (was #0a0a0f)
          darker: '#010409',        // Even darker (was #050508)
          light: '#0f172a',         // Darker light (was #1a1a2e)
          slate: '#1e293b',         // New darker slate
          charcoal: '#374151',      // New charcoal
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)' },  // Updated to match new primary
          '100%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.7)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },  // Darker opacity
          '50%': { opacity: 0.8 },       // Less bright
        },
      },
    },
  },
  plugins: [],
}