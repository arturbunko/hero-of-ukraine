import { useTranslations } from 'use-intl';

export const WantToHelp = () => {
  const t = useTranslations('Want to help');

  return (
    <section id="#want-to-help" className="lg:mt-36 mt-14">
      <h2 className="font-kharkiv xl:text-[110px] lg:text-h2 text-[56px] mix-blend-overlay tracking-tighter xl:mb-10 lg:mb-10 mb-4">
        {t('Want to help')}
      </h2>
      <a className="relative font-kharkiv xl:text-[110px] lg:text-h2 text-[56px] bg-gradient-to-r from-blue to-yellow bg-clip-text text-fill-transparent cursor-pointer hover:before:absolute hover:before:bottom-0 hover:before:left-[15%] hover:before:border-2 hover:before:border-arrow hover:before:w-full">
        {t('Donate Now')}
      </a>
    </section>
  );
};
