import {useTranslations} from "use-intl";

export const Button = () => {
  const t = useTranslations('Support Button');

  return (
    <button className="button-gradient mt-5 ml-3 hover:focus:outline-none">
      <div className="gradient-background" />
      <div className="absolute top-1.5 left-3 flex items-center justify-center font-kharkiv w-full h-full z-10">
          {t('label')}
      </div>
    </button>
  );
};
