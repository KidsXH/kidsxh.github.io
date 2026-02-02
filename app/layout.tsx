import type {ReactNode} from 'react';
import {Footer, Layout, Navbar, ThemeSwitch} from 'nextra-theme-blog';
import {Head} from 'nextra/components';
import {getPageMap} from 'nextra/page-map';
import '../styles/nextra-theme.css';
import '../styles/global.css';
import {inter, jetbrains_mono} from '../styles/fonts';

export const metadata = {
  title: {
    default: 'Zhen Wen',
    template: '%s | Zhen Wen',
  },
  description: 'Personal website of Zhen Wen',
};

export default async function RootLayout({children}: {children: ReactNode}) {
  const pageMap = await getPageMap();
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{dark: '#0f172a', light: '#fefce8'}} />
      <body className={`${inter.variable} ${jetbrains_mono.variable} font-sans`}>
        <Layout>
          <Navbar pageMap={pageMap}>
            <ThemeSwitch />
          </Navbar>
          {children}
          <Footer>
            <small>
              <time>{year}</time> © Zhen Wen.
            </small>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
