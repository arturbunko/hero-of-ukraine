import type { NextPage } from 'next';
import Image from 'next/image';

import { Header } from '../components/header/header';
import Progress from '../components/progress/progress';
import { Heading } from '../components/heading/heading';
import { HelpUs } from '../components/help-us/help-us';
import { Predict } from '../components/predict/predict';
import { Violence } from '../components/violence/violence';
import { AboutUs } from '../components/about-us/about-us';
import { WantToHelp } from '../components/want-to-help/want-to-help';
import { Footer } from '../components/footer/footer';
import { OrientationObserver } from '../components/orientation-observer/orientation-observer';
import { Layout } from '../components/layout/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <OrientationObserver>
        <Header />
        <main>
          <section className="px-6">
            <Progress />
            <Heading />
          </section>
          <section id="images" className="inline-flex gap-5 lg:px-6 px-0 lg:mt-36 mt-16">
            <Image
              src="/hero-of-ukraine/Depositphotos_563061124_S 1.jpg"
              blurDataURL="/hero-of-ukraine/Depositphotos_563061124_S 1.jpg"
              placeholder="blur"
              layout="raw"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="/hero-of-ukraine/Depositphotos_563061124_S 2.jpg"
              blurDataURL="/hero-of-ukraine/Depositphotos_563061124_S 2.jpg"
              placeholder="blur"
              layout="raw"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="/hero-of-ukraine/Depositphotos_563061124_S 3.jpg"
              blurDataURL="/hero-of-ukraine/Depositphotos_563061124_S 3.jpg"
              placeholder="blur"
              layout="raw"
              width={400}
              height={300}
              loading="lazy"
            />
          </section>
          <section className="px-6">
            <HelpUs />
            <Predict />
            <Violence />
          </section>
          <AboutUs />
          <section className="px-6">
            <WantToHelp />
            <Footer />
          </section>
        </main>
      </OrientationObserver>
    </Layout>
  );
};

export default Home;
