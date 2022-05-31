import Image from 'next/image';

export const Predict = () => {
  return (
    <section className="flex flex-row">
      <div className="w-[60%] lg:h-[580px] h-[375px]">
        <Image
          className="lg:w-[436px] lg:h-[580px] lg:object-center w-full h-[375px] object-cover"
          src="/hero-of-ukraine/Depositphotos_567742266_XL 2.jpg"
          blurDataURL="/Depositphotos_567742266_XL 2.jpg"
          placeholder="blur"
          layout="raw"
          width={436}
          height={580}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col lg:w-full justify-between w-[40%] lg:ml-[10%] ml-[5%]">
        <Image
          className="lg:w-[532px] lg:h-[400px] lg:object-center w-full h-[218px] object-cover"
          src="/hero-of-ukraine/Depositphotos_567758610_XL 1.jpg"
          blurDataURL="/Depositphotos_567758610_XL 1.jpg"
          placeholder="blur"
          layout="raw"
          width={532.64}
          height={400}
          loading="lazy"
        />
        <p className="lg:text-body text-bodyMob text-white self-end lg:w-[472px] w-full">
          Experts predict the wildfires&apos; threat to grow in May-June, yet the Russian troops
          have stolen the firefighting equipment. For the record, fire is the leading cause of death
          in wildlife.
        </p>
      </div>
    </section>
  );
};
