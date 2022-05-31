import dynamic from 'next/dynamic';

import { Button } from '../button/button';

const Map = dynamic(() => import('../map/map'), { ssr: false });

export const Heading = () => {
  return (
    <section id="heading" className="flex flex-col">
      <div className="self-end lg:w-[1050px] lg:h-[702px] w-[434px] h-[290px] z-10">
        <Map className="self-end" />
      </div>
      <div className="flex flex-col -mt-44">
        <h1 className="tracking-tighter lg:text-h1 text-h2Mob text-white font-kharkiv w-full">
          war kills nature.
        </h1>
        <p className="lg:text-body text-bodyMob text-white font-mariupol lg:mt-16 mt-8 lg:max-w-[510px] max-w-[390px]">
          At least 219,600 people have lost their homes because of russian-ukrainian war, according
          to the Parliament Commissioner for Human Rights Liudmyla Denysova. The war is equally
          intense on animal and plant life.
        </p>
        <Button />
      </div>
    </section>
  );
};
