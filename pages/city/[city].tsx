import { useRouter } from 'next/router';
import { WantToHelp } from '../../components/want-to-help/want-to-help';
import { Footer } from '../../components/footer/footer';
import { ButtonFlat } from '../../components/button-flat/button-flat';
import { Layout } from '../../components/layout/layout';

const City = () => {
  const router = useRouter();

  const city = router.query.city;

  return (
    <Layout>
      <section>
        <div className="relative flex flex-col items-center w-full h-screen">
          <Background />
          <div className="flex flex-col items-center h-full p-6">
            <BackButton />
            <div className="grid grid-cols-2 gap-y-[32px] lg:gap-x-[128px] gap-x-[96px] m-auto h-fit items-center justify-between h-full m-auto">
              <div className="w-full">
                <h1 className="lg:text-h1 text-h2Mob lg:leading-none leading-[62px] font-kharkiv max-w-md leading-tight z-10">
                  {city}.
                </h1>
              </div>
              <p className="lg:text-body text-bodyMob">
                Papaver is a genus of 70–100 species of frost-tolerant annuals, biennials, and
                perennials native to temperate and cold regions of Eurasia, Africa and North
                America. It is the type genus of the poppy family, Papaveraceae.
              </p>
              <ButtonFlat label="Support" className="lg:visible self-start invisible" />
              <div className="flex justify-between items-center self-start">
                <span className="lg:text-h2 text-h2Mob leading-[42px] tracking-tighter leading-none mix-blend-overlay">
                  1/7
                </span>
                <div className="z-10">
                  <button className="cursor-pointer lg:w-[62px] lg:h-[62px] w-[27px] h-[27px] bg-arrow-left hover:-translate-x-3 ease-in duration-300 hover:bg-arrow-left-active bg-no-repeat bg-contain" />
                  <button className="ml-[62px] cursor-pointer lg:w-[62px] lg:h-[62px] w-[27px] h-[27px] bg-arrow-right hover:translate-x-3 ease-in duration-300 hover:bg-arrow-right-active bg-no-repeat bg-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="px-6">
          <WantToHelp />
          <Footer />
        </section>
      </section>
    </Layout>
  );
};

const BackButton = () => {
  const router = useRouter();

  const handleBackClicked = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBackClicked}
      className="self-start cursor-pointer z-10 lg:w-[57px] lg:h-[57px] w-[27px] h-[27px] hover:-translate-x-3 ease-in duration-300 bg-arrow-left hover:bg-arrow-left-active bg-no-repeat bg-contain"
    />
  );
};

const Background = () => {
  return (
    <div className="absolute w-full h-full">
      <div className="h-1/2 w-full image-gradient-1" />
      <div className="h-1/2 w-full object-cover image-gradient-2" />
    </div>
  );
};

export default City;
