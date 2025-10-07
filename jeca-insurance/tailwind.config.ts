import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom breakpoints for optimal responsive design
      screens: {
        'xs': '475px',    // Extra small devices
        'sm': '640px',    // Small devices (phones)
        'md': '768px',    // Medium devices (tablets)
        'lg': '1024px',   // Large devices (laptops)
        'xl': '1280px',   // Extra large devices (desktops)
        '2xl': '1536px',  // 2X large devices (large desktops)
        // Custom breakpoints for specific use cases
        'mobile': {'max': '767px'},     // Mobile-only styles
        'tablet': {'min': '768px', 'max': '1023px'}, // Tablet-only styles
        'desktop': {'min': '1024px'},   // Desktop and up
      },
      
      // Responsive typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Responsive heading sizes
        'heading-sm': ['1.5rem', { lineHeight: '2rem' }],    // Mobile headings
        'heading-md': ['2rem', { lineHeight: '2.5rem' }],    // Tablet headings
        'heading-lg': ['2.5rem', { lineHeight: '3rem' }],    // Desktop headings
        'heading-xl': ['3rem', { lineHeight: '3.5rem' }],    // Large desktop headings
      },
      
      // Responsive spacing scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        // Container padding for different screen sizes
        'container-sm': '1rem',    // Mobile container padding
        'container-md': '1.5rem',  // Tablet container padding
        'container-lg': '2rem',    // Desktop container padding
        'container-xl': '2.5rem',  // Large desktop container padding
      },
      
      // Enhanced container configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '3.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      
      // Responsive grid configurations
      gridTemplateColumns: {
        'auto-fit-xs': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-md': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-lg': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      
      // Enhanced color palette
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      
      // Responsive border radius
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      
      // Enhanced shadows for different screen sizes
      boxShadow: {
        'mobile': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tablet': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'desktop': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'card-mobile': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        'card-desktop': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      
      // Animation and transition enhancements
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      
      // Z-index scale for layering
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config
