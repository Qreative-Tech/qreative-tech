import { IconDesign } from "@/components/icons/IconDesign";
import { IconLamp } from "@/components/icons/IconLamp";
import { IconStar } from "@/components/icons/IconStar";
import { Card, CardBody } from "@heroui/card";

export const CardsMobile = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-[18px] px-2">
      {/* Card 1 */}
      <Card
        shadow="sm"
        className="relative z-[1] flex h-fit min-w-[320px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-[10px] pb-[11px] shadow-inner backdrop-blur-sm"
      >
        {/* Ikon dengan efek glow */}
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <span className="relative h-12 w-12 animate-pulse rounded-full bg-yellow-500 opacity-30 blur-xl"></span>
          <IconDesign size={24} className="absolute text-yellow-500" />
        </div>
        <CardBody className="px-0 pt-[20px] pb-[8px]">
          <div className="flex flex-col justify-center gap-[6px] px-[15px] text-start">
            {/* Judul */}
            <h1 className="text-start text-[16px] font-bold text-white">
              Design Menarik
            </h1>

            {/* Deskripsi */}
            <p className="text-neutral-custom-200 text-[14px] font-normal">
              Tampilan Web yang user friendly akan mempercepat Transaksi
            </p>
          </div>
        </CardBody>
      </Card>
      {/* Card 2 */}
      <Card
        shadow="sm"
        className="relative flex h-fit min-w-[320px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-[10px] pb-[11px] shadow-inner backdrop-blur-sm"
      >
        {/* Ikon dengan efek glow */}
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <span className="relative h-12 w-12 animate-pulse rounded-full bg-blue-500 opacity-30 blur-xl"></span>
          <IconLamp size={24} className="absolute text-yellow-500" />
        </div>
        <CardBody className="px-0 pt-[20px] pb-[8px]">
          <div className="flex flex-col justify-center gap-[6px] px-[15px] text-start">
            {/* Judul */}
            <h1 className="text-start text-[16px] font-bold text-white">
              Konsultasi Gratis
            </h1>

            {/* Deskripsi */}
            <p className="text-neutral-custom-200 w-[240px] text-[14px] font-normal">
              Konsultasi pengembangan website anda boleh secara cuma-cuma
            </p>
          </div>
        </CardBody>
      </Card>
      {/* Card 3 */}
      <Card
        shadow="sm"
        className="relative z-[1] flex h-fit min-w-[320px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-[10px] pb-[11px] shadow-inner backdrop-blur-sm"
      >
        {/* Ikon dengan efek glow */}
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <span className="relative h-12 w-12 animate-pulse rounded-full bg-yellow-500 opacity-30 blur-xl"></span>
          <IconStar size={24} className="absolute text-yellow-500" />
        </div>
        <CardBody className="px-0 pt-[20px] pb-[8px]">
          <div className="flex flex-col justify-center gap-[6px] px-[15px] text-start">
            {/* Judul */}
            <h1 className="text-start text-[16px] font-bold text-white">
              Jaminan Kepuasan
            </h1>

            {/* Deskripsi */}
            <p className="text-neutral-custom-200 text-[14px] font-normal">
              Kepuasan anda adalah prioritas serta komitmen kami
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
