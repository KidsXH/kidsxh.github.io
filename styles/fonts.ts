import localFont from 'next/font/local';

export const inter = localFont({
  src: '../public/fonts/Inter-roman.latin.var.woff2',
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

// Use system monospace fonts as JetBrains Mono is not available locally
export const jetbrains_mono = {
  variable: '--font-jetbrains-mono',
  style: { fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace' },
};

export default [inter];
