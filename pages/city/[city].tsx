import type { GetStaticPropsContext } from 'next';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { Places } from '../../constants/places';
import { Footer } from '../../components/footer/footer';
import { Layout } from '../../components/layout/layout';
import { getPlacePosition } from '../../utils/getPlacePosition';
import { BackButton } from '../../components/back-button/back-button';
import { ButtonFlat } from '../../components/button-flat/button-flat';
import { WantToHelp } from '../../components/want-to-help/want-to-help';
import { Background } from '../../components/city-background/background';

const City: FC<typeof Places['0']['props']> = ({ images, heading, path, next, prev }) => {
  const [placePosition, setPlacePosition] = useState(1);

  useEffect(() => {
    let initialPlace = localStorage.getItem('hou_city');

    if (!initialPlace) {
      localStorage.setItem('hou_city', path);
      initialPlace = path;
    }

    setPlacePosition(getPlacePosition(initialPlace, path));
  }, [path]);

  return (
    <Layout>
      <section>
        <div className="relative flex flex-col items-center w-full h-screen">
          <Background images={images} />
          <div className="flex flex-col items-center h-full p-6">
            <BackButton />
            <div className="grid grid-cols-2 gap-y-[32px] lg:gap-x-[128px] gap-x-[96px] m-auto h-fit items-center justify-between h-full m-auto">
              <h1 className="lg:text-h1 text-h2Mob text-white lg:leading-none leading-[62px] font-kharkiv max-w-md leading-tight z-10">
                {heading}.
              </h1>
              <p className="lg:text-body text-bodyMob z-10">
                Papaver is a genus of 70–100 species of frost-tolerant annuals, biennials, and
                perennials native to temperate and cold regions of Eurasia, Africa and North
                America. It is the type genus of the poppy family, Papaveraceae.
              </p>
              <ButtonFlat label="Support" className="lg:visible self-start invisible" />
              <div className="flex justify-between items-center self-start">
                <span className="lg:text-h2 text-h2Mob leading-[42px] tracking-tighter leading-none mix-blend-overlay">
                  {placePosition}/{Places.length}
                </span>
                <div className="z-10">
                  <Link href={prev} passHref>
                    <button className="cursor-pointer lg:w-[62px] lg:h-[62px] w-[27px] h-[27px] bg-arrow-left hover:-translate-x-3 ease-in duration-300 hover:bg-arrow-left-active bg-no-repeat bg-contain" />
                  </Link>
                  <Link href={next} passHref>
                    <button className="ml-[62px] cursor-pointer lg:w-[62px] lg:h-[62px] w-[27px] h-[27px] bg-arrow-right hover:translate-x-3 ease-in duration-300 hover:bg-arrow-right-active bg-no-repeat bg-contain" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="px-6">
          <WantToHelp />
          <Footer />
        </section>
      </section>
    </Layout>
  );
};

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext<{ city: string }, undefined>) {
  const place = Places.find((place) => place.path === params?.city);

  if (!place) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...place.props,
      intl: (await import(`../../intl/${locale}.json`)).default,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Places.map((place) => {
      return {
        params: {
          city: place.path,
        },
      };
    }),
    fallback: 'blocking', // false or 'blocking'
  };
}

export default City;
