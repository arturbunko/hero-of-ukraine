import { useTranslations } from 'use-intl';
import dynamic from 'next/dynamic';
const LanguageDropdown = dynamic(() => import('../language-dropdown/language-dropdown'), {
  ssr: false,
});

export const Header = () => {
  const t = useTranslations('Header');

  const scrollTo = (id: string) => () => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b-[1px] border-[#2C2C34]">
      <nav className="h-full">
        <ul className="flex items-center h-full bg-title-background bg-no-repeat bg-left">
          <h1 className="lg:text-body text-bodyMob text-white font-kharkiv lg:mr-[52px] mr-[42px] cursor-pointer">
            Hero for Ukraine
          </h1>
          <li
            onClick={scrollTo('about-us')}
            className="md:block hidden lg:text-body md:text-bodyMob text-white font-mariupol hover:bg-gradient-to-r hover:from-blue hover:to-yellow hover:bg-clip-text hover:text-fill-transparent cursor-pointer"
          >
            {t('about_us')}
          </li>
          <li
            onClick={scrollTo('contact')}
            className="md:block hidden  ml-6 lg:text-body text-bodyMob text-white font-mariupol hover:bg-gradient-to-r hover:from-blue hover:to-yellow hover:bg-clip-text hover:text-fill-transparent cursor-pointer"
          >
            {t('contact')}
          </li>
        </ul>
      </nav>
      <LanguageDropdown />
    </header>
  );
};
