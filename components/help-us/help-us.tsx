import { useTranslations } from 'use-intl';

export const HelpUs = () => {
  const t = useTranslations('Help Us');

  return (
    <section
      id="about-us"
      className="relative lg:mt-64 lg:pt-14 mt-28 lg:pt-7 lg:mb-44 lg:pb-14 mb-14 pb-7"
    >
      <div className="absolute w-full h-full top-0 left-0 bg-ukraine-emblem bg-contain bg-center bg-no-repeat mix-blend-overlay -z-0" />
      <h2 className="xl:text-h0 lg:text-h0Lg text-[44px] text-transparent font-kharkiv text-stroke-1.5 text-stroke-white">
        {t('title1')}
      </h2>
      <div className="flex flex-row items-center justify-betweenlg:mt-12 mt-4 text-white">
        <div className="text-white lg:text-body text-bodyMob lg:max-w-md max-w-[50%]">
          <p>{t('text1')}</p>
          <p className="lg:mt-8 mt-4">{t('text2')}</p>
        </div>
        <h2 className="self-start xl:text-h0 lg:text-h0Lg lg:leading-[0.8] ml-auto text-[44px] leading-[0.8] text-transparent font-kharkiv text-stroke-1.5 text-stroke-white">
          {t('title2')}
        </h2>
      </div>
    </section>
  );
};
