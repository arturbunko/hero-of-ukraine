import Image from 'next/image';

export const Header = () => {
  const scrollTo = (id: string) => () => {
    console.log({ id, element: document.getElementById(id) });
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
            className="lg:text-body text-bodyMob text-white font-mariupol hover:bg-gradient-to-r hover:from-blue hover:to-yellow hover:bg-clip-text hover:text-fill-transparent cursor-pointer"
          >
            About us
          </li>
          <li
            onClick={scrollTo('contact')}
            className="ml-6 lg:text-body text-bodyMob text-white font-mariupol hover:bg-gradient-to-r hover:from-blue hover:to-yellow hover:bg-clip-text hover:text-fill-transparent cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </nav>
      <button className="flex flex-row items-center">
        <Image className="rounded-full" src="/eng.png" layout="fixed" width={24} height={24} />
        <p className="ml-2 mr-5 lx:text-body text-bodyMob">English</p>
        <Image src="/caret_down.svg" layout="fixed" width={10} height={15} />
      </button>
    </header>
  );
};
