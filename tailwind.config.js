module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          background: "#0D1117", // Dark mode, deep black-gray
          primaryAccent: "#58A6FF", // Bright blue, used for buttons and links
          secondaryAccent: "#F78166", // Warm coral, used for highlights and hover effects
          textPrimary: "#E6EDF3", // Soft white for primary text
          textSecondary: "#8B949E", // Muted gray for descriptions
          cta: "#1F6FEB", // Brighter blue for interactive elements
          // Primary brand color - A deep blue-purple that represents technology and professionalism
          primary: {
            50: '#f0f1fe',
            100: '#e2e4fd',
            200: '#c5c9fb',
            300: '#a7aef9',
            400: '#8a93f7',
            500: '#6d78f5',
            600: '#5760c4',
            700: '#414893',
            800: '#2c3062',
            900: '#161831',
          },
          // Neutral colors - Replacing zinc with a warmer, more sophisticated palette
          neutral: {
            50: '#f9f9fb',
            100: '#f3f3f6',
            200: '#e7e8ed',
            300: '#d1d3dc',
            400: '#9fa3b4',
            500: '#717693',
            600: '#4f536d',
            700: '#363847',
            800: '#1f2028',
            900: '#121316',
          }
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          mono: ['JetBrains Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  };