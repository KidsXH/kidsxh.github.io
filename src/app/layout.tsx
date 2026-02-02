import { ReactNode } from 'react'
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import './globals.css'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
})
 
export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0b1221', light: '#f8fafc' }} />
      <body className={roboto.className}>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            {/* <Search /> */}
            <ThemeSwitch />
          </Navbar>
 
          {children}
 
          <Footer>
            <abbr
              title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
              style={{ cursor: 'help' }}
            >
              CC BY-NC 4.0
            </abbr>{' '}
            {new Date().getFullYear()} © Zhen Wen.
          </Footer>
        </Layout>
      </body>
    </html>
  )
}