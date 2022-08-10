import { useTranslations } from 'use-intl';

import { ImagePath } from '../image-path/image-path';

export const Predict = () => {
  const t = useTranslations('Predict');

  return (
    <section className="flex md:flex-row flex-col">
      <div className="md:w-[60%] w-full lg:h-[580px] h-[375px]">
        <ImagePath
          className="lg:w-[436px] lg:h-[580px] lg:object-center w-full h-[375px] object-cover"
          src="/Depositphotos_567742266_XL 2.jpg"
          blurDataURL="/Depositphotos_567742266_XL 2.jpg"
          placeholder="blur"
          width={436}
          height={580}
          loading="lazy"
        />
      </div>
      <div className="flex md:flex-col flex-row lg:w-full justify-between md:w-[40%] w-full md:mt-0 mt-3 lg:ml-[10%] md:ml-[5%] ml-0 md:gap-0 gap-3">
        <ImagePath
          className="lg:w-[532px] md:w-full w-1/2 lg:h-[400px] lg:object-center  h-[218px] object-cover"
          src="/Depositphotos_567758610_XL 1.jpg"
          blurDataURL="/Depositphotos_567758610_XL 1.jpg"
          placeholder="blur"
          width={532.64}
          height={400}
          loading="lazy"
        />
        <p className="lg:text-body text-bodyMob text-white md:self-end self-start lg:w-[472px] lg:mt-0 md:mt-2 mt-0 w-full">
          {t('text')}
        </p>
      </div>
    </section>
  );
};
