/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        // Primary Colors
        marineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%)',
        strawberryRed: 'hsl(354, 84%, 57%)',

        // Neutral Colors
        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        pureWhite: 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'mobile-sidebar': "url('/src/assets/images/bg-sidebar-mobile.svg')",
        'desktop-sidebar': "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
      gridTemplateColumns: {
        '30-70': '30% 70%',
      },
      gridTemplateRows: {
        '80-20': '80% 20%',
      },
    },
  },
  plugins: [],
};
