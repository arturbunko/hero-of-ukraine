import { useTranslations } from 'use-intl';
import { useRouter } from 'next/router';
import { useDonateModal } from '../donate-modal/context';

export const WantToHelp = () => {
  const router = useRouter();
  const { setShow } = useDonateModal();
  const t = useTranslations('Want to help');

  const isUkrainian = router.locale === 'ua';

  return (
    <section id="#want-to-help" className="lg:mt-36 mt-14">
      <h2
        className={[
          'font-kharkiv lg:text-h2 text-[56px] mix-blend-overlay tracking-tighter xl:mb-10 lg:mb-10',
          isUkrainian ? 'xl:text-[110px] xl:leading-[160%]' : 'xl:text-h0',
        ].join(' ')}
      >
        {t('Want to help')}
      </h2>
      <button
        onClick={setShow}
        className={[
          'relative font-kharkiv lg:text-h2 text-[56px] bg-gradient-to-r from-blue to-yellow bg-clip-text text-fill-transparent cursor-pointer',
          'hover:before:absolute hover:before:bottom-0 hover:before:left-[15%] hover:before:border-2 hover:before:border-arrow hover:before:w-full',
          isUkrainian ? 'xl:text-[110px] xl:leading-[160%]' : 'xl:text-h0',
        ].join(' ')}
      >
        {t('Donate Now')}
      </button>
    </section>
  );
};
