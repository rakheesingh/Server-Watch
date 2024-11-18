const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      '4xl': {
        'min': '1800px'
      },
      '3xl': {
        'max': '1700px'
      },
      '2xl': {
        'max': '1400px'
      },
      'xl': {
        'max': '1200px'
      },
      'lg': {
        'max': '1024px'
      },
      'md': {
        'max': '768px'
      },
      'sm': {
        'max': '640px'
      },
      'xs': {
        'max': '480px'
      },
      ...defaultTheme.screens,
    },
    fontSize: {
      "xs": [".625rem", ".875rem"],
      "sm": [".75rem", "1rem"],
      "base": [".875rem", "1.25rem"],
      "large": ["1rem", "1.5rem"],
      "xl": ["1.125rem", "1.75rem"],
      "2xl": ["1.25rem", "1.75rem"],
      "3xl": ["1.5rem", "2rem"],
      "foundation/50": '11px',
      "foundation/75": "12px",
      "foundation/100": "14px",
      "foundation/200": "16px",
      "foundation/300": "18px",
      "foundation/400": "20px",
      "foundation/500": "22px",
      "foundation/600": "24px",
      "foundation/900": "36px",
      "foundation/1100": "45px"
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      "normal": "400",
      "medium": "500",
      "demi": "600",
      "bold": "700",
    },
    extend: {
      borderColor: {
        //we need to remove this once start using IRIS color
        "light-1": "rgba(0,0,0,0.16)",
        "light-2": "rgba(0,0,0,0.08)",
      },
      borderWidth: {
        "secondary": "0.5px",
        "5": "5px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      },
      fontFamily: {//By default tailwind applies . fontFamily.sans to body and other tags expect <code> blocks which use mono.So settings out sans font as inter
        sans: ["Maison", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-blue-1": "#2680EB",
        "brand-blue-2": "#0280FF",
        "brand-blue-3": "#1E66BC",
        "medium-gray": "#9CA3AF",
        "slate-50": "#f8fafc",
        "slate-100": "#F1F5F9",
        "slate-200": "#E2E8F0",
        "slate-400": "#94A3B8",
        "slate-500": "#64748B",
        "slate-700": "#334155",
      },
      boxShadow: {
        "popover": "0px 0px 1px 0px rgba(0, 0, 0, 0.33), 0px 4px 12px 0px rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      height: {
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/5-screen': '60vh',
        '3/4-screen': '75vh',
        '4/5-screen': '80vh',
        '1/2': '50%',
      },
      minHeight: {
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/5-screen': '60vh',
        '3/4-screen': '75vh',
        '4/5-screen': '80vh',
        '1/2': '50%',
      },
      maxHeight: {
        '0': '0',
        '28': '7rem',
        '184': '46rem',
        'half': '50vh',
        '40': '10rem', 
        'full': '100%',
      },
      transitionProperty: {
        'max-height': 'max-height',
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/5-screen': '60vh',
        '3/4-screen': '75vh',
        '4/5-screen': '80vh',
        'width': 'width'
      },
      zIndex: {
        '1000': '1000',
        '2': '2',
      },
      width: {
        '21rem': '21rem',
        '24rem': '24rem',
        'fit': 'inherit',
        '17/20': '85%',
        '19/20': '95%'
      },

    },
  },
  variants: {
    extend: {
      maxHeight: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.tinos-regular': {
          fontFamily: 'Tinos, serif',
          fontWeight: '400',
          fontStyle: 'normal',
        },
        '.tinos-bold': {
          fontFamily: 'Tinos, serif',
          fontWeight: '700',
          fontStyle: 'normal',
        },
        '.tinos-regular-italic': {
          fontFamily: 'Tinos, serif',
          fontWeight: '400',
          fontStyle: 'italic',
        },
        '.tinos-bold-italic': {
          fontFamily: 'Tinos, serif',
          fontWeight: '700',
          fontStyle: 'italic',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
