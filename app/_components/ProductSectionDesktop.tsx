"use client";

import { Image } from "@heroui/image";
import { useState } from "react";
import CardProductDesktop from "./CardProductDesktop";

export const ProductSectionDesktop = () => {
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      id="product"
      className="relative hidden h-auto w-full flex-col items-center justify-center gap-[42px] px-[47px] py-[60px] text-white md:flex"
    >
      <div className="flex w-full flex-col gap-[48px]">
        <div className="flex w-full flex-col items-center gap-[16px]">
          <h1 className="text-[44px] font-bold text-white">Produk Kami</h1>
          <p className="text-accent-300 text-center text-[24px] font-normal">
            Tinjau sebagian dari proyek-proyek website terbaik qreative-tech
          </p>
        </div>
        <CardProductDesktop
          onSlideChange={setCurrentSlide}
          onTotalSlidesChange={setTotalSlides}
        />
        {/* Indicator dots */}
        <div className="flex w-full justify-center gap-2">
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
      <div className="absolute top-[500px] z-0">
        <Image src="/Ellipse.svg" />
      </div>
    </div>
  );
};
