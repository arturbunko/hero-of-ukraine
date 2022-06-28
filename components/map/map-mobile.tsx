import { FC } from 'react';
import { MapCoverMobile } from './map-cover-mobile';
import { useTranslations } from 'use-intl';
import { useRouter } from 'next/router';

export const MapMobile: FC<{ className?: string; onClick: (city: string) => () => void }> = ({
  className,
  onClick: handleClick,
}) => {
  const router = useRouter();
  const t = useTranslations('Map');

  return (
    <MapCoverMobile className={className}>
      <g className="map-dots" onClick={handleClick('mezinsky-park')}>
        <text x="187" y="19" className="font-mariupol text-[10px] uppercase fill-white">
          {t('Mezinsky park')}
        </text>
        <circle id="radar" cx="247" cy="32" r="14" />
        <circle id="cored" cx="247" cy="32" r="6" />
      </g>
      <g className="map-dots" onClick={handleClick('chornobyl-forest')}>
        <text
          x={router.locale === 'ua' ? '130' : '101'}
          y="70"
          className="font-mariupol text-[10px] uppercase fill-white"
        >
          {t('Chornobyl Forest.p1')} {t('Chornobyl Forest.p2')}
        </text>
        <circle id="radar" cx="186" cy="51" r="14" />
        <circle id="cored" cx="186" cy="51" r="6" />
      </g>
      <g className="map-dots" onClick={handleClick('zalissya')}>
        <text x="189" y="93" className="font-mariupol text-[10px] uppercase fill-white">
          {t('Zalissya')}
        </text>
        <circle id="radar" cx="207" cy="74" r="14" />
        <circle id="cored" cx="207" cy="74" r="6" />
      </g>
      <g className="map-dots" onClick={handleClick('hetman-park')}>
        <text x="282" y="56" className="font-mariupol text-[10px] uppercase fill-white">
          {t('Hetman National Park.p1')} {t('Hetman National Park.p2')}
        </text>
        <circle id="radar" cx="303" cy="69" r="14" />
        <circle id="cored" cx="303" cy="69" r="6" />
      </g>
      <g className="map-dots" onClick={handleClick('gene-bank')}>
        <text x="310" y="95" className="font-mariupol text-[10px] uppercase fill-white">
          {t('National Gene Bank.p1')} {t('National Gene Bank.p2')}
        </text>
        <circle id="radar" cx="353" cy="108" r="14" />
        <circle id="cored" cx="353" cy="108" r="6" />
      </g>
      <g className="map-dots" onClick={handleClick('askania-nova')}>
        <text x="251" y="199" className="font-mariupol text-[10px] uppercase fill-white">
          {t('Askania-nova')}
        </text>
        <circle id="radar" cx="281" cy="212" r="14" />
        <circle id="cored" cx="281" cy="212" r="6" />
      </g>
      <g className="map-dots" onClick={handleClick('kinburn-spit')}>
        <text x="197" y="247" className="font-mariupol text-[10px] uppercase fill-white">
          {t('Kinburn Spit')}
        </text>
        <circle id="radar" cx="215" cy="228" r="14" />
        <circle id="cored" cx="215" cy="228" r="6" />
      </g>
    </MapCoverMobile>
  );
};
