"use client";

import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState } from "react";

const cardData = [
  {
    title: "Landing Page",
    desc: "Tempat bisnis anda untuk memperkenalkan lorem ipsum dolor sit amet produk dan layanan anda",
    img: "https://heroui.com/images/hero-card-complete.jpeg",
  },
  {
    title: "Company Profile",
    desc: "Website untuk menampilkan profil perusahaan, visi misi, dan layanan utama.",
    img: "https://heroui.com/images/hero-card-complete.jpeg",
  },
  {
    title: "E-Commerce",
    desc: "Tingkatkan penjualan dengan toko online yang modern dan responsif.",
    img: "https://heroui.com/images/hero-card-complete.jpeg",
  },
  {
    title: "Portfolio",
    desc: "Tampilkan karya terbaik anda dalam website yang elegan dan menarik.",
    img: "https://heroui.com/images/hero-card-complete.jpeg",
  },
  {
    title: "Blog",
    desc: "Sajikan konten artikel dan berita terbaru untuk audiens anda.",
    img: "https://heroui.com/images/hero-card-complete.jpeg",
  },
  {
    title: "Dashboard",
    desc: "Pantau data bisnis anda dengan dashboard interaktif.",
    img: "https://heroui.com/images/hero-card-complete.jpeg",
  },
];

export default function CardProductDesktop() {
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(cardData.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIndex = currentSlide * itemsPerSlide;
  const visibleCards = cardData.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="relative mt-10 flex w-full justify-center">
      {/* Tombol kiri */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <IconRightArrow
          size={30}
          className="rotate-[-180deg] text-white"
          variant="Bold"
        />
      </button>

      {/* Grid Cards */}
      <div className="grid max-w-3xl grid-cols-4 gap-6 px-10">
        {visibleCards.map((card, i) => (
          <Card
            key={i}
            className={`w-[230px] max-w-[465px] border border-white/10 bg-white/5 shadow-inner backdrop-blur-sm transition-all duration-300 ${i === visibleCards.length - 1 ? "-translate-x-6" : ""}`}
          >
            <CardHeader className="flex items-center justify-center px-4 pt-2 pb-0">
              <Image
                alt="Card background"
                className="rounded-xl object-cover"
                src={card.img}
                width={220}
              />
            </CardHeader>
            <CardBody className="mt-3 flex flex-col items-start px-4 pt-2 pb-2">
              <h1 className="text-[14px] font-bold text-white">{card.title}</h1>
              <p className="mt-1 line-clamp-2 bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text text-[12px] text-transparent">
                {card.desc}
              </p>
              <div
                className="mt-3 flex cursor-pointer flex-row items-center gap-2"
                onClick={() => {}}
              >
                <p className="text-warning-300 cursor-pointer text-[12px] font-bold">
                  Read more
                </p>
                <IconRightArrow
                  size={12}
                  className="text-warning-500"
                  variant="Bold"
                />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Tombol kanan */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <IconRightArrow size={30} className="text-white" variant="Bold" />
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
