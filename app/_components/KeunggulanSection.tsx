import CardDesktop from "./CardDesktop";
import { CardsMobile } from "./CardsMobile";

export const KeunggulanSection = () => {
  return (
    <div className="bg-neutral-custom-800 flex min-h-[582px] w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[12px] px-5 pb-8 text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]">
      {/* Judul */}
      <div className="mt-[38px] flex w-full flex-col items-start justify-between px-2 md:flex-row">
        <div>
          <h1 className="text-accent-300 [font-size:clamp(28px,6vw,3rem)] font-bold md:text-5xl">
            Buat Website{" "}
            <span className="text-neutral-custom-300 hidden md:inline">
              Ekslusif
            </span>
          </h1>
          <h1 className="text-neutral-custom-300 text-[28px] font-bold md:hidden md:text-5xl">
            Ekslusif
          </h1>
          <h2 className="text-neutral-custom-300 text-[12px] font-medium md:text-[24px]">
            untuk brand Anda
          </h2>
        </div>
        <div className="text-neutral-custom-500 hidden text-right lg:block">
          <p className="text-[16px] font-medium">
            Solusi eksklusif pembuatan website, web app, dan landing page untuk
            bisnis
          </p>
          <p className="text-[16px] font-medium">
            yang mengutamakan kualitas, efisiensi, dan hasil nyata.
          </p>
        </div>
      </div>

      {/* Cards Mobile */}
      <div className="block lg:hidden">
        <CardsMobile />
        <p className="text-accent-500 mt-[38px] max-w-[420px] [font-size:clamp(11px,2vw,1rem)] font-normal">
          Solusi eksklusif pembuatan website, web app, dan landing page untuk
          bisnis yang mengutamakan kualitas dan efisiensi.
        </p>
      </div>
      {/* Cards Desktop */}
      <div className="hidden lg:block">
        <CardDesktop />
      </div>
    </div>
  );
};
