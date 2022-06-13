import dynamic from 'next/dynamic';

import { Button } from '../button/button';
import { useTranslations } from 'use-intl';

const Map = dynamic(() => import('../map/map'), { ssr: false });

export const Heading = () => {
  const t = useTranslations('Heading');

  return (
    <section id="heading" className="flex flex-col lg:mb-44 mb-8">
      <div className="self-end xl:w-[1050px] lg:w-[950px] lg:h-[702px] w-[434px] h-[290px] z-10">
        <Map className="self-end" />
      </div>
      <div className="flex flex-col lg:-mt-[28rem] mt-[-18.5rem]">
        <h1 className="tracking-tighter xl:text-h1 lg:text-h2 text-h2Mob xl:leading-none lg:leading-none leading-none text-white font-kharkiv w-full lg:max-w-full lg:max-w-[895px] max-w-[390px]">
          {t('title')}
        </h1>
        <p className="lg:text-body text-bodyMob text-white font-mariupol lg:mt-10 mt-4 lg:max-w-[510px] max-w-[300px]">
          {t('description')}
        </p>
        <p className="lg:text-body text-bodyMob text-white font-mariupol lg:mt-2 mt-1 lg:max-w-[510px] max-w-[300px]">
          {t('clarification')}
        </p>
        <Button />
      </div>
    </section>
  );
};
