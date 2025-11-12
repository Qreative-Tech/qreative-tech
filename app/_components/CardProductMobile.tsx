"use client";

import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { listProduk } from "@/utils/constans";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CardProductMobile() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? listProduk.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === listProduk.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative z-20 flex flex-col items-center px-[36px]">
      {/* Card */}
      <Card
        className="w-[282px] cursor-pointer border border-white/10 bg-white/5 py-1 shadow-inner backdrop-blur-sm transition-all duration-300"
        onPress={() => {
          // console.log("clicked");
          router.push(`/produk/${listProduk[current].slug}`);
        }}
        isPressable
      >
        <CardHeader className="flex items-center justify-center px-4 pt-2 pb-0">
          <Image
            alt="Card background"
            className="rounded-xl object-cover"
            src={listProduk[current].img}
            width={245}
          />
        </CardHeader>
        <CardBody className="mt-3 flex flex-col items-start px-4 pt-2 pb-2">
          <h1 className="text-[14px] font-bold text-white">
            {listProduk[current].title}
          </h1>
          <p className="mt-1 bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text text-[12px] text-transparent">
            {listProduk[current].desc}
          </p>
          <div className="mt-3 flex cursor-pointer flex-row items-center gap-2">
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
          {listProduk.map((_, i) => (
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
