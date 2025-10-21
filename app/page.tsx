import { IconPhone } from "@/components/icons/IconPhone";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { AboutSection } from "./_components/AboutSection";
import CardProductDesktop from "./_components/CardProductDesktop";
import CardProductMobile from "./_components/CardProductMobile";
import { ContactDesktop } from "./_components/ContactDesktop";
import { ContactMobile } from "./_components/ContactMobile";
import { HeroSection } from "./_components/HeroSection";
import { KeunggulanSection } from "./_components/KeunggulanSection";

export default function Home() {
  return (
    <section className="relative flex h-full flex-col items-center justify-center gap-0 overflow-hidden lg:pt-10">
      {/* Section Hero */}
      <div id="home" className="relative w-full scroll-mt-[101px]">
        <HeroSection />
      </div>
      <div className="absolute top-55 right-[-100px] z-0">
        <Image
          alt="Glow Right"
          src="/Glow.svg"
          width={684}
          height={681}
          className="object-contain"
        />
      </div>
      {/* Mobile Image absolute */}
      <div className="absolute top-[256px] right-0 z-1 w-[80%] translate-x-1/2 lg:hidden">
        <Image
          alt="PC Image"
          src="/computer.png"
          width={270}
          height={283}
          className="object-contain"
        />
      </div>

      {/* Section Keunggulan */}
      <div className="relative w-full">
        <KeunggulanSection />
      </div>

      {/* Section Product */}
      <div
        id="product"
        className="relative flex h-auto w-full flex-col items-center justify-center gap-[42px] rounded-tl-[24px] rounded-br-[12px] pt-[72px] pb-[62px] text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]"
      >
        <div className="flex w-full flex-col items-center gap-[6px] px-[58px]">
          <h1 className="[font-size:clamp(24px,6vw,44px)] font-semibold text-white md:text-5xl">
            Produk Kami
          </h1>
          <p className="text-neutral-custom-500 text-center text-[14px] font-medium">
            Tinjau sebagian dari proyek-proyek website terbaik qreative-tech
          </p>
        </div>
        <div className="block md:hidden">
          <CardProductMobile />
        </div>
        <div className="hidden md:block">
          <CardProductDesktop />
        </div>
        <div className="absolute top-[500px] z-0">
          <Image src="/Ellipse.svg" />
        </div>
      </div>

      {/* Section Paket Layanan */}
      {/* <div className="bg-neutral-custom-800 relative mt-5 flex h-auto w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[12px] px-5 py-8 text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]">
        <div className="flex w-full flex-col items-center px-8 py-[38px]">
          <h1 className="block bg-gradient-to-r from-[#EEEEEE] to-[#545454] bg-clip-text [font-size:clamp(24px,6vw,44px)] font-bold text-transparent lg:hidden">
            Paket Layanan
          </h1>
          <h1 className="hidden [font-size:clamp(24px,6vw,44px)] font-bold text-white lg:block">
            Paket Layanan untuk Anda
          </h1>
          <div className="z-10 block lg:hidden">
            <CardPaketLayananMobile />
          </div>
          <div className="z-10 hidden w-full justify-center lg:flex">
            <CardPaketLayananDesktop />
          </div>
          <div className="absolute top-0 z-[0] hidden md:block">
            <Image src="/EllipseSecond.svg" />
          </div>
          <div className="absolute bottom-[75px] z-[0] md:hidden">
            <Image src="/EllipseSecond.svg" />
          </div>
        </div>
      </div> */}

      {/* Section Contact */}
      {/* Mobile  */}
      <div className="bg-warning-400 relative flex w-full flex-col items-start px-[24px] py-[16px] lg:hidden">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-warning-900 text-[20px] font-bold">
              Buat website sekarang
            </h1>
            <p className="text-warning-800 text-[14px] font-bold">
              <span className="text-warning-900 text-[14px] font-bold italic">
                Atau {""}
              </span>
              diskusikan kebutuhan anda
            </p>
          </div>
          <div className="flex w-fit flex-row items-center">
            <Button
              as={Link}
              href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
                "Halo! Saya tertarik dengan layanan pembuatan website dari Qreative Tech. Bisa bantu jelaskan lebih lanjut?",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warning-100 text-warning-700 text-[12px] font-bold"
              radius="full"
              size="md"
              startContent={<IconPhone size={12} />}
            >
              Hubungi tim kami
            </Button>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src="/iconVideoCall.svg"
              alt="iconVideoCall"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="bg-warning-400 relative hidden h-[162px] w-full flex-row justify-between px-[24px] py-[16px] lg:flex">
        <div className="flex w-full flex-col justify-center ps-[60px]">
          <h1 className="text-warning-900 [font-size:clamp(20px,6vw,36px)] font-bold md:text-[36px]">
            Buat website sekarang
          </h1>
          <p className="text-warning-800 [font-size:clamp(16px,6vw,28px)] font-bold md:text-[28px]">
            <span className="text-warning-900 [font-size:clamp(16px,6vw,28px)] font-bold italic md:text-[28px]">
              Atau{" "}
            </span>
            diskusikan kebutuhan anda
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-4">
          <Button
            className="bg-warning-800 text-warning-50 my-5 px-[24px] py-[16px] text-[20px] font-bold"
            radius="full"
            size="lg"
            as={Link}
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              "Halo! Saya tertarik dengan layanan pembuatan website dari Qreative Tech. Bisa bantu jelaskan lebih lanjut?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi Kami
          </Button>
          <Button
            className="bg-warning-50 text-warning-900 my-5 px-[24px] py-[16px] text-[20px] font-bold"
            radius="full"
            size="lg"
            startContent={<IconPhone size={25} color="#BD7A00" />}
            as={Link}
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              "Halo! Saya ingin mendiskusikan kebutuhan website saya dengan tim Qreative Tech. Bisa bantu saya menentukan paket yang cocok?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Diskusikan Kebutuhan Anda
          </Button>
        </div>
      </div>

      {/* Section Tentang Kami */}
      <div id="about" className="relative w-full">
        <AboutSection />
      </div>

      {/* Section Kontak */}
      {/* Mobile */}
      <div id="contact" className="block w-full lg:hidden">
        <ContactMobile />
      </div>
      {/* Desktop */}
      <div id="contact" className="hidden w-full lg:block">
        <ContactDesktop />
      </div>
    </section>
  );
}
