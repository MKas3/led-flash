import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        '3xl': '2000px',
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gradient: {
          first: 'var(--gradient-first)',
          second: 'var(--gradient-second)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
      },
      borderRadius: {
        default: 'var(--radius)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'hero-overlay': {
          from: { transform: 'translateX(-20vw) rotate(-30deg)' },
          to: { transform: 'translateX(80vw) rotate(-30deg)' },
        },
        'hero-overlay-mobile': {
          from: { transform: 'translateX(-20vw) rotate(-30deg)' },
          to: { transform: 'translateX(180vw) rotate(-30deg)' },
        },
        'mouse-scroll-rect': {
          from: { height: '40px', transform: 'translateY(0px)' },
          '50%': { height: '40px', transform: 'translateY(0px)' },
          to: { height: '34px', transform: 'translateY(6px)' },
        },
        'mouse-scroll-wheel': {
          from: { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(0px)' },
          to: { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'hero-overlay': 'hero-overlay 5s ease-in-out infinite alternate',
        'hero-overlay-mobile':
          'hero-overlay-mobile 5s ease-in-out infinite alternate',
        'mouse-scroll-rect':
          'mouse-scroll-rect 0.6s ease-in-out infinite alternate',
        'mouse-scroll-wheel':
          'mouse-scroll-wheel 0.6s ease-in-out infinite alternate',
      },
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      fontFamily: {
        unbounded: ['var(--font-unbounded)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      height: {
        header: 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)',
      },
      inset: {
        header: 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)',
        'header-top': 'var(--header-top)',
        'header-top-sm': 'var(--header-top-sm)',
      },
      padding: {
        header: 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)',
        container: 'var(--container-padding)',
        'container-lg': 'var(--container-padding-lg)',
        'container-md': 'var(--container-padding-md)',
        'container-sm': 'var(--container-padding-sm)',
        footer: 'var(--footer-padding)',
        'footer-lg': 'var(--footer-padding-lg)',
        'footer-md': 'var(--footer-padding-md)',
        'footer-sm': 'var(--footer-padding-sm)',
      },
      margin: {
        header: 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)',
        container: 'var(--container-padding)',
        'container-lg': 'var(--container-padding-lg)',
        'container-md': 'var(--container-padding-md)',
        'container-sm': 'var(--container-padding-sm)',
        footer: 'var(--footer-padding)',
        'footer-lg': 'var(--footer-padding-lg)',
        'footer-md': 'var(--footer-padding-md)',
        'footer-sm': 'var(--footer-padding-sm)',
      },
      backgroundImage: {
        underline:
          'linear-gradient(currentColor 0 0) var(--p, 0) 100% /var(--d, 0) 3px no-repeat',
      },
      scale: {
        '200': '200%',
      },
      outlineWidth: {
        '3': '3px',
      },
      outlineOffset: {
        '3': '3px',
      },
      fontSize: {
        '2xs': '13px',
        '3xs': '12px',
        '4xs': '11px',
        '5xs': '10px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: [
    '-inset-x-2',
    'md:left-0',
    'md:right-auto',
    'text-2xs',
    'md:text-xs',
    'md:mb-5',
    'gap-x-1',
    'mb-[2em]',
    'mb-7',
    '[&_+_h2]:mt-[2.5em]',
    'mb-24',
    'mb-20',
    'md:rounded-sm',
    'lg:rounded-sm',
    'lg:mx-[-20%]',
    '2xl:mx-[-50%]',
    'md:mx-[-12.5%]',
    '!leading-snug',
  ],
} satisfies Config;

export default config;
