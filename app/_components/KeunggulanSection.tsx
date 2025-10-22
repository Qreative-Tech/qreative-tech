import CardDesktop from "./CardDesktop";

export const KeunggulanSection = () => {
  return (
    <div className="bg-neutral-custom-800 flex min-h-[582px] w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[72px] px-[96px] py-[98px] text-white md:rounded-tl-[100px] lg:gap-[120px] xl:gap-[54px]">
      {/* Judul */}
      <div className="flex h-[90px] w-full flex-row items-start justify-between">
        <div className="h-[90px]">
          <h1 className="text-accent-300 text-[44px] font-bold">
            Buat Website{" "}
            <span className="text-neutral-custom-300">Ekslusif</span>
          </h1>
          <h2 className="text-neutral-custom-300 text-[24px] font-medium">
            untuk brand Anda
          </h2>
        </div>
        <div className="text-neutral-custom-500 pe-[26px] text-right">
          <p className="text-[16px] font-normal">
            Solusi eksklusif pembuatan website, web app, dan landing page untuk
            bisnis
          </p>
          <p className="text-[16px] font-normal">
            yang mengutamakan kualitas, efisiensi, dan hasil nyata.
          </p>
        </div>
      </div>
      {/* Cards Desktop */}
      <CardDesktop />
    </div>
  );
};
