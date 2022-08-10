import { useTranslations } from 'next-intl';

export const YelavetsViolents = () => {
  const t = useTranslations('YelanetsViolence');

  return (
    <section className="lg:px-6 md:px-10 px-4">
      <section id="violence" className="lg:mt-36 mt-12">
        <p className="text-white lg:text-h3 text-h3Mob lg:leading-[56px] md:w-1/2 w-full">
          {t('text-part-one')} <span className="text-red">{t('text-part-two')}</span>
          {t('text-part-three')}
        </p>
        <p className="text-white lg:text-body md:text-12 text-16 lg:leading-[22.4px] lg:mt-8 mt-4 md:w-1/2 w-full">
          {t('text-part-four')}
        </p>
      </section>
    </section>
  );
};
