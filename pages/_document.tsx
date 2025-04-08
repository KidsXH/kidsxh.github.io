import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Zhen Wen',
    description: 'Personal website of Zhen Wen',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />


        {/* Favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
