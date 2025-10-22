"use client";

import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { listProduk } from "@/utils/constans";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

type CardProductDesktopProps = {
  onSlideChange?: (slide: number) => void;
  onTotalSlidesChange?: (total: number) => void;
};

export default function CardProductDesktop({
  onSlideChange,
  onTotalSlidesChange,
}: CardProductDesktopProps) {
  const router = useRouter();

  // state untuk semua yang tergantung ukuran layar
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [spacing, setSpacing] = useState(320);
  const [center, setCenter] = useState("50%");
  const [mounted, setMounted] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // handle responsive values
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Jumlah item per slide
      if (width < 768) setItemsPerSlide(1);
      else if (width < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(4);

      // Spacing antar kartu
      let newSpacing = 320;
      if (width < 768)
        newSpacing = 0; // mobile
      else if (width < 1024)
        newSpacing = 120; // tablet
      else if (width < 1280)
        newSpacing = 280; // laptop
      else if (width < 1536)
        newSpacing = 220; // desktop (fix 1280-1535)
      else newSpacing = 180; // layar besar
      setSpacing(newSpacing);

      // Posisi center (penyesuaian biar nggak geser ke kanan)
      let newCenter = "0%";
      if (width < 768) newCenter = "0%";
      else if (width < 1024) newCenter = "-70%";
      else if (width < 1280) newCenter = "-60%";
      else if (width < 1536)
        newCenter = "-60%"; // perbaiki posisi di 1280-1535px
      else newCenter = "-60%"; // di layar besar balik ke tengah
      setCenter(newCenter);
    };

    handleResize(); // inisialisasi awal
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(listProduk.length / itemsPerSlide);

  useEffect(() => {
    onTotalSlidesChange?.(totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    onSlideChange?.(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIndex = currentSlide * itemsPerSlide;
  const visibleCards = listProduk.slice(startIndex, startIndex + itemsPerSlide);

  const start = -((visibleCards.length - 1) * spacing) / 2;

  return (
    <div className="relative flex w-full flex-row items-center justify-between">
      {mounted && (
        <>
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
          <div className="relative mx-auto flex h-[485px] w-full justify-center">
            {visibleCards.map((card, i) => (
              <motion.div
                key={`${card.title}-${startIndex + i}`}
                className="absolute top-1/2 left-1/2 w-[237px]"
                animate={{
                  transform:
                    spacing === 0
                      ? "none"
                      : `translate(calc(${center} + ${start + i * spacing}px), -50%)`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                style={{
                  zIndex: i + 1,
                }}
              >
                <Card
                  className={`w-[330px] max-w-[465px] gap-[41.79px] border border-white/10 bg-white/5 px-[25.07px] py-[22.66px] shadow-inner backdrop-blur-sm transition-all duration-300`}
                >
                  <CardHeader className="flex-col items-start p-0">
                    <Image
                      alt="Card background"
                      className="rounded-xl object-cover"
                      src={card.img}
                      width={280}
                      height={242}
                    />
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <div className="flex flex-col gap-[7px] px-[3.76px]">
                      <p className="text-[28px] font-bold text-white">
                        {card.title}
                      </p>
                      <div className="flex flex-col gap-[15px]">
                        <p className="line-clamp-2 bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text text-[14px] font-normal text-transparent">
                          {card.desc}
                        </p>
                        <div
                          className="flex cursor-pointer flex-row items-center gap-[10px]"
                          onClick={() => router.push(`/produk/${card.slug}`)}
                        >
                          <p className="text-warning-300 cursor-pointer text-[16px] font-bold">
                            Read more
                          </p>
                          <IconRightArrow
                            size={17}
                            className="text-warning-500"
                            variant="Bold"
                          />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tombol kanan */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer"
          >
            <IconRightArrow
              size={30}
              className="text-accent-600"
              variant="Bold"
            />
          </button>
        </>
      )}
    </div>
  );
}
