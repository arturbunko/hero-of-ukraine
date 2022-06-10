import { useTranslations } from 'use-intl';

export const Violence = () => {
  const t = useTranslations('Violence');

  return (
    <section id="violence" className="lg:mt-36 mt-12">
      <p className="text-white lg:text-h3 text-h3Mob lg:leading-[56px] max-w-[800px] max-w-[60%]">
        {t('text')}
      </p>
    </section>
  );
};
