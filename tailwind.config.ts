import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c',
        'secondary': '#2d3748',
        'accent': '#4fd1c5',
        'light-bg': '#f7f7f7',
        'dark-bg': '#1a202c',
        'text': {
          light: '#1a202c',
          dark: '#f7fafc',
        },
        'button': {
          primary: '#4fd1c5',
          secondary: '#2d3748',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.light'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.text.dark'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config