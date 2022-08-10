import { useTranslations } from 'next-intl';
import { ImagePath } from '../../../components/image-path/image-path';

export const WhyNeedReserve = () => {
  const t = useTranslations('WhyNeedReserve');

  return (
    <section className="flex md:flex-row flex-col lg:gap-28 gap-8 lg:px-6 md:px-10 px-4 lg:mt-40 mt-16">
      <ImagePath
        className="md:w-1/2 w-full h-auto"
        placeholder="blur"
        blurDataURL="https://strapi.myplantin.com/thumbnail_Depositphotos_567742266_XL_2_3d0d1a4b21.webp"
        src="https://strapi.myplantin.com/Depositphotos_567742266_XL_2_3d0d1a4b21.webp"
        width={962}
        height={696}
        external
      />
      <div className="self-end">
        <p className="lg:text-body md:text-12 text-16 lg:mb-11 mb-4">{t('text1')}</p>
        <p className="lg:text-body md:text-12 text-16">{t('text2')}</p>
      </div>
    </section>
  );
};
