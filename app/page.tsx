import { IconPhone } from "@/components/icons/IconPhone";
import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import CardDesktop from "./_components/CardDesktop";
import CardPaketLayananDesktop from "./_components/CardPaketLayananDesktop";
import CardPaketLayananMobile from "./_components/CardPaketLayananMobile";
import CardProductDesktop from "./_components/CardProductDesktop";
import CardProductMobile from "./_components/CardProductMobile";
import { CardsMobile } from "./_components/CardsMobile";
import { ContactDesktop } from "./_components/ContactDesktop";
import { ContactMobile } from "./_components/ContactMobile";

export default function Home() {
  return (
    <section className="relative flex h-full flex-col items-center justify-center gap-0 overflow-hidden lg:pt-10">
      {/* Section Hero */}
      <div className="mx-[15px] flex h-full w-full flex-col items-start gap-4 lg:mx-[72px] lg:flex-row lg:items-center">
        {/* Left Section */}
        <div className="relative z-10 inline-block w-full justify-start ps-4 text-start lg:ps-10">
          {/* Judul */}
          <h1 className="ps-4 [font-size:clamp(28px,6vw,48rem)] font-bold lg:ps-6 lg:text-6xl">
            Jasa Pembuatan
          </h1>

          {/* Highlight */}
          <div className="mt-2 w-fit rounded-lg border border-white/5 bg-white/5 px-[12px] lg:px-[25.62px] lg:py-[13px]">
            <h1 className="text-warning-300 text-[28px] font-bold lg:text-6xl">
              Website Profesional
            </h1>
          </div>

          {/* Desktop Deskripsi */}
          <div className="text-neutral-custom-300 mt-4 hidden w-fit ps-4 text-[14px] lg:block lg:w-[800px] lg:ps-6 lg:text-[20px]">
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

          {/* Tombol Desktop */}
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="border-accent-700 mt-8 hidden h-[39px] items-center justify-center border px-5 py-2 text-sm font-bold lg:flex lg:h-[62px] lg:px-[26px] lg:py-[18px] lg:text-[20px]"
            endContent={
              <IconRightArrow size={30} className="text-accent-400 ms-2" />
            }
          >
            Pesan Sekarang
          </Button>

          {/* Mobile Deskripsi */}
          <div className="text-neutral-custom-300 mt-4 w-fit ps-4 text-[14px] lg:hidden">
            <p>Dapatkan kemudahan dan kualitas unggul</p>
            <p>Untuk mengoptimalkan potensi bisnis Anda.</p>
          </div>

          {/* Tombol Mobile */}
          <div className="relative z-10 mt-4 ps-4 lg:hidden">
            <Button
              variant="solid"
              color="secondary"
              radius="full"
              className="border-accent-700 h-[40px] border px-[18px] py-[10px] text-sm text-[14px] font-bold"
              endContent={
                <IconRightArrow size={18} className="text-accent-400 ms-2" />
              }
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
      <div className="bg-neutral-custom-800 mt-5 flex h-auto w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[12px] px-5 py-8 text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]">
        {/* Judul */}
        <div className="flex w-full flex-col items-start justify-between px-2 md:flex-row">
          <div className="pt-4">
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
              Solusi eksklusif pembuatan website, web app, dan landing page
              untuk bisnis
            </p>
            <p className="text-[16px] font-medium">
              yang mengutamakan kualitas, efisiensi, dan hasil nyata.
            </p>
          </div>
        </div>

        {/* Cards Mobile */}
        <div className="block lg:hidden">
          <CardsMobile />
          <p className="text-accent-500 mt-[38px] max-w-[420px] ps-2 [font-size:clamp(13px,2vw,1rem)] font-normal">
            Solusi eksklusif pembuatan website, web app, dan landing page untuk
            bisnis yang mengutamakan kualitas dan efisiensi.
          </p>
        </div>
        {/* Cards Desktop */}
        <div className="hidden lg:block">
          <CardDesktop />
        </div>
      </div>

      {/* Section Product */}
      <div className="mt-5 flex h-auto w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[12px] px-5 py-8 text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]">
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
      </div>

      {/* Section Paket Layanan */}
      <div className="bg-neutral-custom-800 mt-5 flex h-auto w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[12px] px-5 py-8 text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]">
        <div className="flex w-full flex-col items-center px-8 py-[38px]">
          <h1 className="block bg-gradient-to-r from-[#EEEEEE] to-[#545454] bg-clip-text [font-size:clamp(24px,6vw,44px)] font-bold text-transparent lg:hidden">
            Paket Layanan
          </h1>
          <h1 className="hidden [font-size:clamp(24px,6vw,44px)] font-bold text-white lg:block">
            Paket Layanan untuk Anda
          </h1>
          <div className="block lg:hidden">
            <CardPaketLayananMobile />
          </div>
          <div className="hidden lg:block">
            <CardPaketLayananDesktop />
          </div>
        </div>
      </div>

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
            className="bg-warning-100 text-warning-700 my-5 text-[12px] font-bold"
            radius="full"
            size="md"
            startContent={<IconPhone size={12} />}
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
          >
            Hubungi Kami
          </Button>
          <Button
            className="bg-warning-50 text-warning-900 my-5 px-[24px] py-[16px] text-[20px] font-bold"
            radius="full"
            size="lg"
            startContent={<IconPhone size={25} color="#BD7A00" />}
          >
            Diskusikan Kebutuhan Anda
          </Button>
        </div>
      </div>

      {/* Section Tentang Kami */}
      {/* Mobile */}
      <div className="my-[82px] flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg:hidden">
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
      <div className="my-[82px] hidden h-[733px] w-full flex-row items-center justify-center gap-4 px-[100px] py-8 md:py-10 lg:flex">
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
      <div className="block w-full lg:hidden">
        <ContactMobile />
      </div>
      {/* Desktop */}
      <div className="hidden w-full lg:block">
        <ContactDesktop />
      </div>
    </section>
  );
}
