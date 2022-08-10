import { useTranslations } from 'next-intl';
import { ImagePath } from '../../../components/image-path/image-path';

export const BecameAHero = () => {
  const t = useTranslations('BecameAHero');

  return (
    <section className="flex md:flex-row flex-col lg:gap-36 gap-8 lg:px-6 md:px-10 px-4 lg:mt-40 mt-16">
      <ImagePath
        className="md:flex-1 flex-auto w-full lg:h-auto h-[375px] md:min-w-[392px] min-w-full object-cover"
        placeholder="blur"
        blurDataURL="https://strapi.myplantin.com/thumbnail_image_1_00bb15dd94.webp"
        src="https://strapi.myplantin.com/image_1_00bb15dd94.webp"
        width={566}
        height={720}
        external
      />
      <p className="self-end lg:w-1/2 w-full lg:p-16 p-4 bg-white-05 bg-blend-overlay lg:text-body text-12 text-center">
        {t('text')}
      </p>
    </section>
  );
};
