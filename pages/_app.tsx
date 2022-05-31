import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no"
        />
        <title>Hero of Ukraine</title>
      </Head>
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
