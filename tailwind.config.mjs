/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E2F48',
        accent: {
          100: '#67e565',
          200: '#0080ff',
          300: '#173a5e'
        },
        textColor: {
          100: '#46485D',
          200: '#b0b2c3',
          300: '#fff'
        },
        btn: {
          100: '#0080ff',
          150: '#0059B2',
          200: '#173a5e',
          250: '#132f4c'
        },
        background: {
          100: '#111827',
          200: '#0A1929'
        }
      },
      screens: {
        desktop: '970px',
        tablet: '768px',
        mobile: '499px'
      }
    }
  },
  plugins: []
}
