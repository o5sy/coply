import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#529480',
        secondary: '#E8F2F0',
      },
    },
  },
};
export default config;
