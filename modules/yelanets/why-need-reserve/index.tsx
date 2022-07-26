import { useTranslations } from 'next-intl';
import { ImagePath } from '../../../components/image-path/image-path';

export const WhyNeedReserve = () => {
  const t = useTranslations('WhyNeedReserve');

  return (
    <section className="flex lg:gap-28 gap-8 lg:px-6 px-10 lg:mt-40 mt-16">
      <ImagePath
        className="w-1/2 h-auto"
        src="https://strapi.myplantin.com/Depositphotos_567742266_XL_2_3d0d1a4b21.webp"
        layout="raw"
        width={962}
        height={696}
        external
      />
      <div className="self-end">
        <p className="lg:text-body text-12 lg:mb-11 mb-4">{t('text1')}</p>
        <p className="lg:text-body text-12">{t('text2')}</p>
      </div>
    </section>
  );
};
