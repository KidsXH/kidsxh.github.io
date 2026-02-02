import localFont from 'next/font/local';

export const inter = localFont({
  src: '../public/fonts/Inter-roman.latin.var.woff2',
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

export const jetbrains_mono = localFont({
  src: '../public/fonts/Inter-roman.latin.var.woff2',
  display: 'swap',
  variable: '--font-jetbrains-mono',
  fallback: ['monospace'],
});

export default [inter, jetbrains_mono];
