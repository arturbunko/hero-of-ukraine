import {useRouter} from "next/router";

export const BackButton = () => {
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