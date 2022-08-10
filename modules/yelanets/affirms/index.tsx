import { useTranslations } from 'next-intl';

export const Affirms = () => {
  const t = useTranslations('Affirms');

  const options = Array(+t('options'))
    .fill('')
    .map((_, index) => `option${index + 1}`);

  return (
    <section className="lg:px-6 md:px-10 px-4 lg:mt-40 mt-16 lg:w-1/2 w-full">
      <h2 className="lg:text-h3 text-24 !leading-normal">{t('title')}</h2>
      <p className="lg:text-body text-12 lg:mt-6 mt-4">{t('list')}</p>
      <ol className="flex flex-col lg:gap-4 gap-2 lg:mt-6 mt-4">
        {options.map((option) => (
          <li
            className="relative flex items-center max-w-[448px] lg:text-body text-12 before:block before:content-[''] before:w-[94px] before:min-w-[94px] before:h-[1px] before:mr-6 before:bg-white"
            key={option}
          >
            {t(option)}
          </li>
        ))}
      </ol>
    </section>
  );
};
