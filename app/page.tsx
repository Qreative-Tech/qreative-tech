import { IconPhone } from "@/components/icons/IconPhone";
import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
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
      {/* <div className="absolute top-[-250px] left-0 z-2 border-1">
        <Image
          alt="Glow Left"
          src="/Glow2.svg"
          // width={684}
          // height={681}
          className="object-contain"
        />
      </div> */}
      <div id="home" className="relative w-full">
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
      <div className="absolute top-[185px] right-0 z-0 w-[80%] translate-x-1/2 lg:hidden">
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
        className="relative mt-5 flex h-auto w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[12px] px-5 py-8 text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]"
      >
        <div className="flex w-full flex-col items-center px-[58px]">
          <h1 className="[font-size:clamp(24px,6vw,44px)] font-semibold text-white md:text-5xl">
            Produk Kami
          </h1>
          <p className="text-neutral-custom-500 mt-3 text-center text-[14px] font-medium">
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
        <h1 className="text-warning-900 [font-size:clamp(20px,6vw,44px)] font-bold md:text-[44px]">
          Buat website sekarang
        </h1>
        <p className="text-warning-800 [font-size:clamp(16px,6vw,33px)] font-bold md:text-[33px]">
          <span className="text-warning-900 [font-size:clamp(16px,6vw,33px)] font-bold italic md:text-[33px]">
            Atau {""}
          </span>
          diskusikan kebutuhan anda
        </p>
        <div className="flex w-full flex-row items-center justify-between">
          <Button
            as={Link}
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              "Halo! Saya tertarik dengan layanan pembuatan website dari Qreative Tech. Bisa bantu jelaskan lebih lanjut?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warning-100 text-warning-700 my-5 text-[15px] font-bold"
            radius="full"
            size="md"
            startContent={<IconPhone size={15} />}
          >
            Hubungi tim kami
          </Button>
          <Image
            src="/iconVideoCall.svg"
            alt="iconVideoCall"
            width={100}
            height={100}
          />
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
      {/* Mobile */}
      <div
        id="about"
        className="my-[82px] flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg:hidden"
      >
        <div className="bg-neutral-custom-800 rounded-[37px]">
          <Image src="/group.svg" alt="group" width={252} height={165} />
        </div>
        <div className="mt-5 flex flex-col items-start justify-center px-[50px]">
          <h1 className="text-neutral-custom-200 text-start text-[24px] font-bold">
            Tentang Kami
          </h1>
          <p className="mt-4 bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text text-[12px] font-normal text-transparent">
            Kami adalah tim yang berdedikasi untuk membantu Anda merintis bisnis
            online. Dengan pengalaman yang luas dalam industri digital, kami
            menyediakan solusi terbaik untuk membantu Anda menciptakan website
            yang unik dan menarik.
          </p>
          <div className="mt-3 flex cursor-pointer flex-row items-center gap-2">
            <p className="text-warning-300 text-[14px] font-bold">Read more</p>
            <IconRightArrow
              size={14}
              className="text-warning-500"
              variant="Bold"
            />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div
        id="about"
        className="my-[82px] hidden h-[733px] w-full flex-row items-center justify-center gap-4 px-[100px] py-8 md:py-10 lg:flex"
      >
        <Image src="/groupEllipse.svg" alt="group" width={569} height={389} />
        <div className="mt-5 flex flex-col items-start justify-center px-[50px]">
          <h1 className="text-neutral-custom-200 text-start [font-size:clamp(24px,6vw,44px)] font-bold">
            Tentang Kami
          </h1>
          <p className="mt-4 max-w-[547px] bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text [font-size:clamp(12px,6vw,20px)] font-normal text-transparent">
            Kami adalah tim yang berdedikasi untuk membantu Anda merintis bisnis
            online. Dengan pengalaman yang luas dalam industri digital, kami
            menyediakan solusi terbaik untuk membantu Anda menciptakan website
            yang unik dan menarik.
          </p>
          <div className="mt-3 flex cursor-pointer flex-row items-center gap-2">
            <p className="text-warning-300 text-[14px] font-bold">Read more</p>
            <IconRightArrow
              size={14}
              className="text-warning-500"
              variant="Bold"
            />
          </div>
        </div>
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
