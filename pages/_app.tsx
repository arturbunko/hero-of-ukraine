import { AnimatePresence, LazyMotion } from 'framer-motion';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

const loadFeatures = () => import('../constants/features').then((res) => res.default);

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
      <LazyMotion features={loadFeatures} strict>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <NextIntlProvider messages={pageProps.intl}>
            <Component {...pageProps} />
          </NextIntlProvider>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default MyApp;
