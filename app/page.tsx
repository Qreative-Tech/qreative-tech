"use client";

import LottieAsset from "@/assets/lotties/Ai based chatbot discuss (4).json";
import { IconPhone } from "@/components/icons/IconPhone";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import Lottie from "lottie-react";
import { AboutSection } from "./_components/AboutSection";
import CardPaketLayananDesktop from "./_components/CardPaketLayananDesktop";
import CardPaketLayananMobile from "./_components/CardPaketLayananMobile";
import { ContactDesktop } from "./_components/ContactDesktop";
import { ContactMobile } from "./_components/ContactMobile";
import { HeroSection } from "./_components/HeroSection";
import { HeroSectionMobile } from "./_components/HeroSectionMobile";
import { KeunggulanSection } from "./_components/KeunggulanSection";
import { KeunggulanSectionMobile } from "./_components/KeunggulanSectionMobile";
import { ProductSectionDesktop } from "./_components/ProductSectionDesktop";
import { ProductSectionMobile } from "./_components/ProductSectionMobile";

export default function Home() {
  return (
    <section className="relative flex h-full flex-col items-center justify-center gap-0 overflow-hidden">
      {/* Section Hero */}
      <div
        id="home"
        className="relative block w-full scroll-mt-[101px] lg:hidden"
      >
        <HeroSectionMobile />
      </div>
      <div
        id="home"
        className="relative hidden w-full scroll-mt-[101px] lg:block"
      >
        <HeroSection />
      </div>
      <div className="absolute [top:clamp(10px,8vw,55px)] [right:clamp(-250px,-8vw,-100px)] z-0">
        <Image
          alt="Glow Right"
          src="/Glow.svg"
          width={684}
          height={681}
          className="[height:clamp(300px,40vw,681px)] [width:clamp(300px,40vw,684px)] object-contain"
        />
      </div>

      {/* Mobile Image absolute */}
      <div className="absolute [top:clamp(170px,20vw,-100px)] [right:clamp(0px,-20vw,100px)] z-1 w-fit translate-x-1/2 lg:hidden">
        {/* <Image
          alt="PC Image"
          src="/computer.png"
          width={`[clamp(270px,25vw,370px)]`}
          height={`[clamp(283px,26vw,383px)]`}
          className="[height:clamp(283px,26vw,583px)] [width:clamp(270px,25vw,670px)]"
        /> */}
        <Lottie
          animationData={LottieAsset}
          loop={true}
          width={445}
          className="max-w-[500px]"
          height={470}
        />
      </div>

      {/* Section Keunggulan */}
      <div className="relative block w-full lg:hidden">
        <KeunggulanSectionMobile />
      </div>
      <div className="relative hidden w-full lg:block">
        <KeunggulanSection />
      </div>

      {/* Section Product */}
      <ProductSectionMobile />
      <ProductSectionDesktop />

      {/* Section Paket Layanan */}
      <div className="bg-neutral-custom-800 mt-5 flex h-auto w-full flex-col items-center justify-center rounded-tl-[24px] rounded-br-[12px] px-5 py-8 text-white md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:pt-[121px] md:pb-[230px]">
        <div className="relative flex w-full flex-col items-center px-8 py-[38px]">
          <h1 className="block bg-gradient-to-r from-[#EEEEEE] to-[#545454] bg-clip-text [font-size:clamp(24px,6vw,44px)] font-bold text-transparent lg:hidden">
            Paket Layanan
          </h1>
          <h1 className="hidden [font-size:clamp(24px,6vw,44px)] font-bold text-white lg:block">
            Paket Layanan untuk Anda
          </h1>
          <div className="z-10 block md:hidden">
            <CardPaketLayananMobile />
          </div>
          <div className="z-10 hidden w-full justify-center md:flex">
            <CardPaketLayananDesktop />
          </div>
          {/* Untuk Desktop */}
          <div className="absolute bottom-[-80px] left-[47%] z-[0] hidden w-full max-w-[782px] -translate-x-1/2 md:block lg:left-[48%]">
            <Image src="/GlowPacketDesktop.svg" width={"100%"} />
          </div>
          {/* Untuk Mobile */}
          <div className="absolute bottom-[80px] z-[0] md:hidden">
            <Image src="/EllipseMobile.svg" />
          </div>
          <div className="absolute bottom-[28px] z-[0] md:hidden">
            <Image src="/GlowPacketMobile.svg" />
          </div>
        </div>
      </div>

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
                "Halo! Saya tertarik dengan layanan pembuatan website dari Nadanta Dev. Bisa bantu jelaskan lebih lanjut?",
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
              "Halo! Saya tertarik dengan layanan pembuatan website dari Nadanta. Bisa bantu jelaskan lebih lanjut?",
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
              "Halo! Saya ingin mendiskusikan kebutuhan website saya dengan tim Nadanta. Bisa bantu saya menentukan paket yang cocok?",
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
