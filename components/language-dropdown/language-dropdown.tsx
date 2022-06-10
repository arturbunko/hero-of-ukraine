import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { languages } from '../../constants/languages';
import { ImagePath } from '../image-path/image-path';

const LanguageDropdown = () => {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<typeof languages[0]>(() => {
    if (typeof window === 'undefined') return languages[0];
    const lang = localStorage.getItem('language');
    return lang ? JSON.parse(lang) : languages[0];
  });

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang) {
      router.push('/', '/', { locale: JSON.parse(lang).prefix });
    }
  }, []);

  const handleLanguageChoice = (prefix: string) => () => {
    const chosenLanguage = languages.find((lang) => lang.prefix === prefix)!;

    setActiveLanguage(chosenLanguage);
    setIsOpened(false);
    localStorage.setItem('language', JSON.stringify(chosenLanguage, null, 2));

    router.push('/', '/', { locale: prefix });
  };

  const availableLanguages = languages.filter((lang) => lang.prefix !== activeLanguage.prefix);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button className="flex flex-row items-center" onClick={() => setIsOpened(!isOpened)}>
          <CountryFlag image={activeLanguage.icon} />
          <p className="ml-2 mr-5 lx:text-body text-bodyMob">{activeLanguage.lang}</p>
          <ImagePath src="/caret_down.svg" layout="fixed" width={10} height={15} />
        </button>
      </div>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100
          ${isOpened ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="p-3" role="none">
          {availableLanguages.map(({ icon, lang, prefix }) => (
            <button
              key={prefix}
              className="flex flex-row items-center"
              onClick={handleLanguageChoice(prefix)}
            >
              <CountryFlag image={icon} />
              <p className="ml-2 mr-5 text-black lx:text-body text-bodyMob">{lang}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const CountryFlag = ({ image }: { image: typeof languages[0]['icon'] }) => {
  return (
    <div className="rounded-full w-[24px] h-[24px] overflow-hidden">
      <ImagePath className={`min-w-[24px]`} src={image} layout="raw" width={48} height={48} />
    </div>
  );
};

export default LanguageDropdown;
