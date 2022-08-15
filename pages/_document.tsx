import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/hero-of-ukraine/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/hero-of-ukraine/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/hero-of-ukraine/favicon-16x16.png" />
        <link rel="manifest" href="/hero-of-ukraine/site.webmanifest" />
        <link rel="mask-icon" href="/hero-of-ukraine/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <div id="portal-container" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
