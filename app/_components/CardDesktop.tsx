import { IconDesign } from "@/components/icons/IconDesign";
import { IconLamp } from "@/components/icons/IconLamp";
import { IconStar } from "@/components/icons/IconStar";
import { Card, CardBody } from "@heroui/card";

export default function CardDesktop() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-[40px] lg:grid-cols-2 xl:grid-cols-3">
      {/* Card 1 */}
      <Card
        shadow="sm"
        className="flex h-[243px] max-w-[420px] min-w-[390px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-[32px] shadow-inner backdrop-blur-sm"
      >
        <div className="flex flex-col gap-[27px] pt-[15px]">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-12 w-12 animate-pulse rounded-full bg-yellow-500 opacity-30 blur-xl" />
            <IconDesign size={36} className="text-yellow-500" />
          </div>
          <CardBody className="flex flex-col items-center gap-2 p-0 text-center">
            <h1 className="text-[24px] font-bold text-white">Design Menarik</h1>
            <p className="text-[16px] font-medium text-[#E8E8E8]">
              Tampilan web yang user friendly akan mempercepat Transaksi
            </p>
          </CardBody>
        </div>
      </Card>

      {/* Card 2 */}
      <Card
        shadow="sm"
        className="flex h-[243px] max-w-[420px] min-w-[390px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-[32px] shadow-inner backdrop-blur-sm"
      >
        <div className="flex flex-col gap-[27px] pt-[15px]">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-12 w-12 animate-pulse rounded-full bg-blue-500 opacity-30 blur-xl" />
            <IconLamp size={36} />
          </div>
          <CardBody className="flex flex-col items-center gap-2 p-0 text-center">
            <h1 className="text-[24px] font-bold text-white">
              Konsultasi Gratis
            </h1>
            <p className="text-[16px] font-medium text-[#E8E8E8]">
              Konsultasi pengembangan website anda boleh secara cuma-cuma
            </p>
          </CardBody>
        </div>
      </Card>

      {/* Card 3 */}
      <Card
        shadow="sm"
        className="flex h-[243px] max-w-[420px] min-w-[390px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-[32px] shadow-inner backdrop-blur-sm lg:col-span-2 lg:w-full xl:col-span-1"
      >
        <div className="flex flex-col gap-[27px] pt-[15px]">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-12 w-12 animate-pulse rounded-full bg-yellow-500 opacity-30 blur-xl" />
            <IconStar size={36} />
          </div>
          <CardBody className="flex flex-col items-center gap-2 p-0 text-center">
            <h1 className="text-[24px] font-bold text-white">
              Jaminan Kepuasan
            </h1>
            <p className="text-[16px] font-medium text-[#E8E8E8]">
              Kepuasan anda adalah prioritas serta komitmen kami
            </p>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
