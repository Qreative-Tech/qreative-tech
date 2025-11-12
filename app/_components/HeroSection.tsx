import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

export const HeroSection = () => {
  return (
    <div className="flex h-full w-full flex-row items-center gap-4 px-[72px] py-[62px]">
      {/* Left Section */}
      <div className="item-start relative z-10 flex w-full flex-col gap-[33px] text-start">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            {/* Judul */}
            <h1 className="w-[622px] ps-[24px] text-[60px] leading-[75px] font-bold">
              Jasa Pembuatan{" "}
              <span className="text-warning-300 relative text-[60px] font-bold">
                Website Profesional
                {/* Highlight */}
                <div className="absolute top-0 left-[-14px] h-[78px] w-[618px] rounded-lg border border-white/5 bg-white/5 px-[11px]" />
              </span>
            </h1>
          </div>

          {/* Desktop Deskripsi */}
          <div className="text-neutral-custom-300 block w-[750px] ps-[24px] text-[20px]">
            <p>
              Permudah aktivitas bisnis dan perusahaan anda dengan solusi
              digital kami.
            </p>
            <p>
              Dapatkan{" "}
              <span className="font-bold">kemudahan & kualitas unggul</span>{" "}
              untuk mengoptimalkan potensi bisnis anda.
            </p>
          </div>
        </div>

        {/* Tombol Desktop */}
        <Button
          variant="solid"
          color="secondary"
          radius="full"
          className="group border-accent-700 hover:text-neutral-custom-300 hover:bg-brand-400 flex h-[62px] w-max items-center justify-center border px-[26px] py-[18px] text-[20px] font-bold transition duration-300 ease-in-out hover:border-[#555454]"
          endContent={
            <IconRightArrow
              size={30}
              className="text-accent-400 group-hover:text-warning-100 ms-2 transition duration-300 ease-in-out"
            />
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
