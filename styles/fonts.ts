import {Roboto, JetBrains_Mono} from 'next/font/google';

export const inter = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter',
});

export const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
    style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export default [inter, jetbrains_mono];
