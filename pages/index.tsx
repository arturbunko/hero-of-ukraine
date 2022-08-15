import type { GetStaticPropsContext, NextPage } from 'next';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Layout } from '../components/layout/layout';
import Progress from '../components/progress/progress';
import { HelpUs } from '../components/help-us/help-us';
import { Heading } from '../components/heading/heading';
import { Predict } from '../components/predict/predict';
import { AboutUs } from '../components/about-us/about-us';
import { Violence } from '../components/violence/violence';
import { ImagePath } from '../components/image-path/image-path';
import { WantToHelp } from '../components/want-to-help/want-to-help';
import { DonateModalProvider } from '../components/donate-modal/context';
import { NextSeo } from 'next-seo';
import { useTranslations } from 'next-intl';

const Home: NextPage = () => {
  const t = useTranslations('About Us');
  return (
    <Layout>
      <NextSeo
        openGraph={{
          title: 'Hero of Ukraine',
          description: t('text'),
          url: 'https://stage.myplantin.com/hero-of-ukraine',
          site_name: 'Hero of Ukraine',
          images: [
            {
              url: 'https://strapi.myplantin.com/image.png',
              width: 1200,
              height: 630,
              alt: 'Hero of Ukraine',
            },
          ],
        }}
      />
      <DonateModalProvider>
        <Header />
        <main>
          <section className="md:px-6 px-4">
            <Progress />
            <Heading />
          </section>
          <section
            id="images"
            className="md:inline-grid md:grid-cols-3 grid grid-cols-1 lg:gap-5 gap-2 lg:px-6 px-0 lg:mt-36 mt-16 xl:w-4/6 w-full"
          >
            <ImagePath
              className="lg:max-w-full h-auto object-contain"
              src="/Depositphotos_563061124_S 1.jpg"
              blurDataURL="/Depositphotos_563061124_S 1.jpg"
              placeholder="blur"
              width={400}
              height={300}
              loading="lazy"
            />
            <ImagePath
              className="lg:max-w-fullh-auto object-contain"
              src="/Depositphotos_563061124_S 2.jpg"
              blurDataURL="/Depositphotos_563061124_S 2.jpg"
              placeholder="blur"
              width={400}
              height={300}
              loading="lazy"
            />
            <ImagePath
              className="lg:max-w-full h-auto object-contain"
              src="/Depositphotos_563061124_S 3.png"
              blurDataURL="/Depositphotos_563061124_S 3.png"
              placeholder="blur"
              width={400}
              height={300}
              loading="lazy"
            />
          </section>
          <section className="md:px-6 px-4">
            <HelpUs />
            <Predict />
            <Violence />
          </section>
          <AboutUs />
          <section className="md:px-6 px-4">
            <WantToHelp />
            <Footer />
          </section>
        </main>
      </DonateModalProvider>
    </Layout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      intl: (await import(`../intl/${locale}/home.json`)).default,
    },
  };
}

export default Home;
