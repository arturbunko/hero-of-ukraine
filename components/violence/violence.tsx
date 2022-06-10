import { useTranslations } from 'use-intl';

export const Violence = () => {
  const t = useTranslations('Violence');

  return (
    <section id="violence" className="lg:mt-36 mt-12">
      <p className="text-white lg:text-h3 text-h3Mob lg:leading-[56px] max-w-[800px] max-w-[60%]">
        {t('text-part-one')} <span className="text-red">{t('text-part-two')}</span>
        {t('text-part-three')}
      </p>
      <p className="text-white lg:text-body text-[12px] lg:leading-[22.4px] lg:mt-8 mt-4 max-w-[800px] max-w-[56%]">
        {t('text-part-four')}
      </p>
    </section>
  );
};
