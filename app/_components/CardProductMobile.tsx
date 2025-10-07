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
];

export default function CardProductMobile() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mt-10 flex flex-col items-center">
      {/* Card */}
      <Card className="w-[282px] border border-white/10 bg-white/5 py-1 shadow-inner backdrop-blur-sm transition-all duration-300">
        <CardHeader className="flex items-center justify-center px-4 pt-2 pb-0">
          <Image
            alt="Card background"
            className="rounded-xl object-cover"
            src={cardData[current].img}
            width={245}
          />
        </CardHeader>
        <CardBody className="mt-3 flex flex-col items-start px-4 pt-2 pb-2">
          <h1 className="text-[14px] font-bold text-white">
            {cardData[current].title}
          </h1>
          <p className="mt-1 bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text text-[12px] text-transparent">
            {cardData[current].desc}
          </p>
          <div
            className="mt-3 flex cursor-pointer flex-row items-center gap-2"
            onClick={() => {}}
          >
            <p className="text-warning-300 text-[12px] font-bold">Read more</p>
            <IconRightArrow
              size={12}
              className="text-warning-500"
              variant="Bold"
            />
          </div>
        </CardBody>
      </Card>

      {/* Navigation */}
      <div className="flex w-full items-center justify-between gap-8">
        <button onClick={prevSlide} className="pt-14">
          <IconRightArrow
            size={30}
            className="text-accent-600 rotate-[-180deg]"
            variant="Bold"
          />
        </button>
        <div className="flex gap-1">
          {cardData.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-4 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="pt-14">
          <IconRightArrow
            size={30}
            className="text-accent-600"
            variant="Bold"
          />
        </button>
      </div>
    </div>
  );
}
