import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

export const HeroSection = () => {
  return (
    <div className="mt-[56px] mb-[50px] flex h-full w-full flex-col items-start gap-4 ps-[15px] pe-[10px] lg:mx-[72px] lg:flex-row lg:items-center">
      {/* Left Section */}
      <div className="relative z-10 inline-block w-full justify-start text-start lg:ps-[100px]">
        {/* Judul */}
        <h1 className="ps-[14px] pt-[10px] [font-size:clamp(28px,6vw,48rem)] font-bold lg:ps-6 lg:text-6xl">
          Jasa Pembuatan
        </h1>

        {/* Highlight */}
        <div className="mt-2 w-fit rounded-lg border border-white/5 bg-white/5 px-[11px] lg:py-[13px]">
          <h1 className="text-warning-300 text-[28px] font-bold lg:text-6xl">
            Website Profesional
          </h1>
        </div>

        {/* Desktop Deskripsi */}
        <div className="text-neutral-custom-300 mt-4 hidden w-fit ps-4 text-[14px] lg:block lg:w-[700px] lg:ps-6 lg:text-[20px] xl:w-[800px]">
          <p>
            Permudah aktivitas bisnis dan perusahaan anda dengan solusi digital
            kami.
          </p>
          <p>
            Dapatkan{" "}
            <span className="font-bold">kemudahan & kualitas unggul</span> untuk
            mengoptimalkan potensi bisnis anda.
          </p>
        </div>

        {/* Tombol Desktop */}
        <Button
          variant="solid"
          color="secondary"
          radius="full"
          className="border-accent-700 mt-8 hidden h-[39px] w-max items-center justify-center border px-5 py-2 text-sm font-bold lg:flex lg:h-[62px] lg:px-[26px] lg:py-[18px] lg:text-[20px]"
          endContent={
            <IconRightArrow size={30} className="text-accent-400 ms-2" />
          }
          as={Link}
          href={`https://wa.me/6285231796284?text=${encodeURIComponent(
            "Halo! Saya mau pesan jasa pembuatan website dari kamu. Bisa bantu prosesnya sekarang?",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pesan Sekarang
        </Button>

        {/* Mobile Deskripsi */}
        <div className="text-neutral-custom-300 mt-4 w-fit ps-[14px] text-[14px] lg:hidden">
          <p>Dapatkan kemudahan dan kualitas unggul</p>
          <p>Untuk mengoptimalkan potensi bisnis Anda.</p>
        </div>

        {/* Tombol Mobile */}
        <div className="relative z-10 mt-[24px] ps-[14px] lg:hidden">
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="border-accent-700 h-[40px] border px-[18px] py-[12px] text-sm text-[14px] font-bold"
            endContent={
              <IconRightArrow size={18} className="text-accent-400 ms-2" />
            }
            as={Link}
            href={`https://wa.me/6285231796284?text=${encodeURIComponent(
              "Halo! Saya mau pesan jasa pembuatan website dari kamu. Bisa bantu prosesnya sekarang?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan Sekarang
          </Button>
        </div>
      </div>

      {/* Right Section - Desktop */}
      <div className="relative hidden w-full items-center justify-center pe-10 lg:flex">
        <Image
          alt="PC Image"
          src="/computer.png"
          width={445}
          height={470}
          className="object-contain"
        />
      </div>
    </div>
  );
};
