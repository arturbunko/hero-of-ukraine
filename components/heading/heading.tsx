import { useRouter } from 'next/router';
import { useTranslations } from 'use-intl';

import { Button } from '../button/button';
import Map from '../map';

export const Heading = () => {
  const router = useRouter();
  const t = useTranslations('Heading');

  const isUkrainian = router.locale === 'ua';

  return (
    <section id="heading" className="flex flex-col xl:mb-44 mb-8 mt-10">
      <div className="self-end xl:w-[1050px] xl:h-[702px] w-[434px] h-[290px] z-10">
        <Map className="self-end" />
      </div>
      <div className={['flex flex-col xl:-mt-[26rem] md:mt-[-18.5rem] mt-0'].join(' ')}>
        <h1 className="tracking-tighter xl:text-h1 lg:text-h2 md:text-h2Mob text-[38px] xl:leading-none !leading-tight text-white font-kharkiv w-full xl:max-w-[895px] lg:max-w-[700px] md:max-w-[390px] max-w-full">
          {t('title')}
        </h1>
        <p className="lg:text-body text-bodyMob text-white font-mariupol lg:mt-10 mt-4 xl:max-w-[510px] lg:max-w-[400px] md:max-w-[300px] w-full">
          {t('description')}
        </p>
        <Button />
      </div>
    </section>
  );
};
