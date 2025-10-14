"use client";

import DashboardEventImg from "@/assets/portofolio/dashboard-mockup.jpg";
import essImg from "@/assets/portofolio/ess-mockup.jpg";
import idekeenImg from "@/assets/portofolio/idekeen-mockup.jpg";
import booksImg from "@/assets/portofolio/ngebook-mockup.jpg";
import quizzImg from "@/assets/portofolio/quiz-mockup.jpg";
import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { useEffect, useState } from "react";

const cardData = [
  {
    title: "Indekeen",
    desc: "Landing page bisnis untuk memperkenalkan produk dan layanan Anda",
    img: idekeenImg.src,
  },
  {
    title: "Dashboard Event",
    desc: "Sistem Manajemen yang memudahkan aktivitas operasional perusahaan Anda",
    img: DashboardEventImg.src,
  },
  {
    title: "Quizz App",
    desc: "Buat quiz atau survey dengan mudah di custome sesuai kebutuhan Anda",
    img: quizzImg.src,
  },
  {
    title: "Books App",
    desc: "Aplikasi manajemen buku store online sederhana dengan design menarik dan user friendly",
    img: booksImg.src,
  },
  {
    title: "ESS Telkom",
    desc: "Landing page komunikasi untuk memperkenalkan program dan produk komunitas Anda",
    img: essImg.src,
  },
];

export default function CardProductDesktop() {
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerSlide(1);
      } else if (width < 1024) {
        setItemsPerSlide(2); // md: 2 card
      } else {
        setItemsPerSlide(4); // lg ke atas: 4 card
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(cardData.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Reset currentSlide jika itemsPerSlide berubah agar tidak out of bounds
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIndex = currentSlide * itemsPerSlide;
  const visibleCards = cardData.slice(startIndex, startIndex + itemsPerSlide);
  // Tentukan spacing responsif
  let spacing = 320; // default (xl)
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width < 768)
      spacing = 0; // sm: tampil 1 card aja
    else if (width < 1024)
      spacing = 220; // md
    else if (width < 1280)
      spacing = 280; // lg
    else spacing = 320; // xl ke atas
  }

  const start = -((visibleCards.length - 1) * spacing) / 2;

  return (
    <div className="relative mt-10 flex w-[90vw] flex-row items-center justify-center">
      {/* Tombol kiri */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer"
      >
        <IconRightArrow
          size={30}
          className="text-accent-600 rotate-[-180deg]"
          variant="Bold"
        />
      </button>

      {/* Grid Cards */}
      <div className="relative flex h-[560px] justify-end px-4 md:px-6 lg:px-8 xl:px-10">
        {visibleCards.map((card, i) => (
          <div
            key={`${card.title}-${startIndex + i}`}
            className={`absolute top-1/2 left-1/2 transition-all duration-300 ${
              spacing === 0
                ? "relative top-0 left-0 translate-x-0 translate-y-0"
                : ""
            }`}
            style={{
              transform:
                spacing === 0
                  ? "none"
                  : `translate(calc(-50% + ${start + i * spacing}px), -50%)`,
              zIndex: i + 1,
            }}
          >
            <Card
              className={`w-[280px] max-w-[461px] border border-white/10 bg-white/5 shadow-inner backdrop-blur-sm transition-all duration-300 sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[395px]`}
            >
              <CardHeader className="flex items-center justify-center px-3 pt-6 pb-0 md:px-4">
                <Image
                  alt="Card background"
                  className="rounded-xl object-cover"
                  src={card.img}
                  width={345}
                  height={242}
                />
              </CardHeader>
              <CardBody className="mt-[20px] flex flex-col items-start px-5 pb-2 md:mt-[30px] md:px-6">
                <h1 className="text-[22px] font-bold text-white md:text-[24px] lg:text-[26px] xl:text-[28px]">
                  {card.title}
                </h1>
                <p className="mt-1 line-clamp-2 bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text text-[13px] text-transparent md:text-[14px]">
                  {card.desc}
                </p>
                <div
                  className="mt-3 mb-[20px] flex cursor-pointer flex-row items-center gap-2"
                  onClick={() => {}}
                >
                  <p className="text-warning-300 cursor-pointer text-[15px] font-bold md:text-[16px]">
                    Read more
                  </p>
                  <IconRightArrow
                    size={16}
                    className="text-warning-500"
                    variant="Bold"
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      {/* Tombol kanan */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer"
      >
        <IconRightArrow size={30} className="text-accent-600" variant="Bold" />
      </button>

      {/* Indicator dots */}
      <div className="absolute -bottom-6 flex w-full justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentSlide ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
