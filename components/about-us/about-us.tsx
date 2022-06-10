import { useTranslations } from 'use-intl';

export const AboutUs = () => {
  const t = useTranslations('About Us');

  return (
    <section
      id="about-us"
      className="relative flex items-center justify-center xl:mt-36 mt-14 py-14"
    >
      <div className="absolute w-full h-full bg-white-20 mix-blend-overlay" />
      <p className="xl:text-body text-bodyMob max-w-[602px] text-center">{t('text')}</p>
    </section>
  );
};
