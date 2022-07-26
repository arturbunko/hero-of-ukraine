import { useTranslations } from 'next-intl';
import { ImagePath } from '../../../components/image-path/image-path';

export const BecameAHero = () => {
  const t = useTranslations('BecameAHero');

  return (
    <section className="flex lg:gap-36 gap-8 lg:px-6 px-10 lg:mt-40 mt-16">
      <ImagePath
        className="flex-1 w-full lg:h-auto h-[375px] min-w-[392px] object-cover"
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
