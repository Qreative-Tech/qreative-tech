import { IconDesign } from "@/components/icons/IconDesign";
import { IconLamp } from "@/components/icons/IconLamp";
import { IconStar } from "@/components/icons/IconStar";
import { Card, CardBody } from "@heroui/card";

export const CardsMobile = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 px-2">
      {/* Card 1 */}
      <Card
        shadow="sm"
        className="relative flex h-fit min-w-[320px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner backdrop-blur-sm"
      >
        {/* Ikon dengan efek glow */}
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <span className="relative h-16 w-16 animate-pulse rounded-full bg-yellow-500 opacity-30 blur-xl"></span>
          <IconDesign size={30} className="absolute text-yellow-500" />
        </div>
        <CardBody className="flex flex-col justify-center gap-3 text-start">
          {/* Judul */}
          <h1 className="text-start text-[24px] font-bold text-white">
            Design Menarik
          </h1>

          {/* Deskripsi */}
          <p className="mt-3 text-[16px] font-medium text-[#E8E8E8]">
            Tampilan Web yang user friendly akan mempercepat Transaksi
          </p>
        </CardBody>
      </Card>
      {/* Card 2 */}
      <Card
        shadow="sm"
        className="relative flex h-fit min-w-[320px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner backdrop-blur-sm"
      >
        {/* Ikon dengan efek glow */}
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <span className="relative h-16 w-16 animate-pulse rounded-full bg-blue-500 opacity-30 blur-xl"></span>
          <IconLamp size={30} className="absolute text-yellow-500" />
        </div>
        <CardBody className="flex flex-col justify-center gap-3 text-start">
          {/* Judul */}
          <h1 className="text-start text-[24px] font-bold text-white">
            Konsultasi Gratis
          </h1>

          {/* Deskripsi */}
          <p className="mt-3 text-[16px] font-medium text-[#E8E8E8]">
            Konsultasi pengembangan website anda boleh secara cuma-cuma
          </p>
        </CardBody>
      </Card>
      {/* Card 3 */}
      <Card
        shadow="sm"
        className="relative flex h-fit min-w-[320px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner backdrop-blur-sm"
      >
        {/* Ikon dengan efek glow */}
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <span className="relative h-16 w-16 animate-pulse rounded-full bg-yellow-500 opacity-30 blur-xl"></span>
          <IconStar size={30} className="absolute text-yellow-500" />
        </div>
        <CardBody className="flex flex-col justify-center gap-3 text-start">
          {/* Judul */}
          <h1 className="text-start text-[24px] font-bold text-white">
            Jaminan Kepuasan
          </h1>

          {/* Deskripsi */}
          <p className="mt-3 text-[16px] font-medium text-[#E8E8E8]">
            Kepuasan anda adalah prioritas serta komitmen kami
          </p>
        </CardBody>
      </Card>
    </div>
  );
};
