import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const HeroSectionMobile = () => {
  return (
    <div className="mt-[56px] mb-[50px] flex h-full w-full flex-col items-start gap-4 ps-[15px] pe-[10px]">
      {/* Left Section */}
      <div className="relative z-10 inline-block w-full justify-start text-start">
        {/* Judul */}
        <h1 className="ps-[14px] pt-[10px] [font-size:clamp(28px,6vw,48rem)] font-bold">
          Jasa Pembuatan
        </h1>

        {/* Highlight */}
        <div className="mt-2 w-fit rounded-lg border border-white/5 bg-white/5 px-[11px]">
          <h1 className="text-warning-300 [font-size:clamp(28px,6vw,48rem)] font-bold">
            Website Profesional
          </h1>
        </div>

        {/* Mobile Deskripsi */}
        <div className="text-neutral-custom-300 mt-4 w-fit ps-[14px] [font-size:clamp(14px,3vw,1rem)]">
          <p>Dapatkan kemudahan dan kualitas unggul</p>
          <p>Untuk mengoptimalkan potensi bisnis Anda.</p>
        </div>

        {/* Tombol Mobile */}
        <div className="relative z-10 mt-[24px] w-fit ps-[14px]">
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="border-accent-700 [height:clamp(40px,6vw,4rem)] border px-[18px] [padding-block:clamp(12px,3vw,1rem)] [font-size:clamp(14px,3vw,1rem)] font-bold"
            endContent={
              <IconRightArrow size={18} className="text-accent-400 ms-2" />
            }
            as={Link}
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              "Halo! Saya mau pesan jasa pembuatan website dari kamu. Bisa bantu prosesnya sekarang?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};
