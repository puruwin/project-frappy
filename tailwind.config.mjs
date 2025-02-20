export default {
  theme: {
    extend: {
      colors: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)',
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 