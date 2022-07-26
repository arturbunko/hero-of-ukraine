import { FC } from 'react';
import { useTranslations } from 'use-intl';

import useMediaQuery from '../../hooks/useMediaQuery';
import { MapCoverDesktop } from './map-cover-desktop';
import { useRouter } from 'next/router';

export const MapDesktop: FC<{ className?: string; onClick: (city: string) => () => void }> = ({
  className,
  onClick,
}) => {
  const router = useRouter();
  const t = useTranslations('Map');

  const isUkrainian = router.locale === 'ua';

  return (
    <MapCoverDesktop className={className}>
      <g className="map-dots" onClick={onClick('yelanets-steppe')}>
        <text x="500" y="400" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('Yelanets Steppe')}
        </text>
        <circle id="radar" cx="560" cy="430" r="16" />
        <circle className="glowing-button-red" id="cored" cx="560" cy="430" r="6" />
      </g>
      <g className="map-dots" onClick={onClick('askania-nova')}>
        <text x="624" y="514" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('Askania-nova')}
        </text>
        <circle id="radar" cx="687" cy="534" r="16" />
        <circle className="glowing-button-red" id="cored" cx="687" cy="534" r="6" />
      </g>
      <g className="map-dots" onClick={onClick('kinburn-spit')}>
        <text x="457" y="552" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('Kinburn Spit')}
        </text>
        <circle id="radar" cx="538" cy="527" r="16" />
        <circle id="cored" cx="538" cy="527" r="6" />
      </g>
      <g className="map-dots" onClick={onClick('chornobyl-forest')}>
        {isUkrainian ? (
          <text x="435" y="130" className="font-mariupol text-bodyMob uppercase fill-white">
            {t('Chornobyl Forest.p1')} {t('Chornobyl Forest.p2')}
          </text>
        ) : (
          <>
            <text x="435" y="130" className="font-mariupol text-bodyMob uppercase fill-white">
              {t('Chornobyl Forest.p1')}
            </text>
            <text x="435" y="152" className="font-mariupol text-bodyMob uppercase fill-white">
              {t('Chornobyl Forest.p2')}
            </text>
          </>
        )}

        <circle id="radar" cx="463" cy="106" r="16" />
        <circle id="cored" cx="463" cy="106" r="6" />
      </g>
      <g className="map-dots" onClick={onClick('zalissya')}>
        <text x="470" y="190" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('Zalissya')}
        </text>
        <circle id="radar" cx="514" cy="164" r="16" />
        <circle id="cored" cx="514" cy="164" r="6" />
      </g>
      <g className="map-dots" onClick={onClick('mezinsky-park')}>
        <text x="519" y="94" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('Mezinsky park')}
        </text>
        <circle id="radar" cx="622" cy="69" r="16" />
        <circle id="cored" cx="622" cy="69" r="6" />
      </g>
      <g className="map-dots" onClick={onClick('hetman-park')}>
        <text x="658" y="135" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('Hetman National Park.p1')}
        </text>
        <text x="658" y="155" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('Hetman National Park.p2')}
        </text>
        <circle id="radar" cx="740" cy="175" r="16" />
        <circle id="cored" cx="740" cy="175" r="6" />
      </g>
      <g className="map-dots" onClick={onClick('gene-bank')}>
        <text x="786" y="284" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('National Gene Bank.p1')}
        </text>
        <text x="786" y="304" className="font-mariupol text-bodyMob uppercase fill-white">
          {t('National Gene Bank.p2')}
        </text>
        <circle id="radar" cx="868" cy="259" r="16" />
        <circle id="cored" cx="868" cy="259" r="6" />
      </g>
    </MapCoverDesktop>
  );
};
