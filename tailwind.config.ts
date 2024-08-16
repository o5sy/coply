/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    // container: {
    //   center: true,
    //   padding: '2rem',
    //   screens: {
    //     '2xl': '1400px',
    //   },
    // },
    extend: {
      colors: {
        primary: '#0d9488', // teal-600
        secondary: '#E8F2F0',
      },
      screens: {
        sm: '480px',
      },
      //   keyframes: {
      //     'accordion-down': {
      //       from: { height: '0' },
      //       to: { height: 'var(--radix-accordion-content-height)' },
      //     },
      //     'accordion-up': {
      //       from: { height: 'var(--radix-accordion-content-height)' },
      //       to: { height: '0' },
      //     },
      //   },
      //   animation: {
      //     'accordion-down': 'accordion-down 0.2s ease-out',
      //     'accordion-up': 'accordion-up 0.2s ease-out',
      //   },
      // },
    },
    // plugins: [require('tailwindcss-animate')],
  },
} satisfies Config;

export default config;
