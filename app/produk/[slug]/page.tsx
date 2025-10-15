"use client";

import bg from "@/assets/bg.png";
import { title } from "@/components/primitives";
import { listProduk } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Tab, Tabs } from "@heroui/tabs";
import { useParams } from "next/navigation";
import { IoIosCheckmarkCircle, IoIosStar, IoMdLink } from "react-icons/io";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProdukDetailPage() {
  const { slug } = useParams();
  const produk = listProduk.find((item) => item.slug === slug);

  if (!produk) {
    return (
      <div>
        <h1 className={title()}>Produk Tidak Ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* HEADER PRODUK */}
      <div
        className="bg relative w-full bg-cover bg-center bg-no-repeat py-10 md:h-[200px]"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="top-[120px] left-[70px] flex flex-col items-center gap-[30px] md:absolute md:flex-row md:items-end">
          <Image
            src={produk.logo}
            alt={produk.title}
            width={180}
            height={180}
            className="rounded-3xl"
          />

          <div className="flex flex-col items-center text-center md:items-start">
            <h1 className="text-3xl font-bold text-white">{produk.title}</h1>
            <p className="font-medium text-gray-100 md:text-gray-400">
              {produk.category}
            </p>

            <div className="mt-1 flex items-center gap-1">
              {Array.from({ length: produk.rating }).map((_, i) => (
                <span key={i}>
                  <IoIosStar className="text-yellow-200" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab */}
      <div className="flex flex-col overflow-hidden px-4 md:mx-[50px] md:mt-[150px]">
        <div className="flex w-full flex-col overflow-hidden">
          <Tabs
            aria-label="Options"
            placement={"top"}
            className="overflow-x-hidden"
            color="primary"
          >
            <Tab
              key="desc"
              title="Deskripsi"
              className="w-full overflow-x-hidden"
            >
              {/* DESKRIPSI & FITUR */}
              <div className="grid grid-cols-1 gap-8 px-0 py-10 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h2 className="mb-3 text-xl font-semibold">Deskripsi</h2>
                  <p className="leading-relaxed whitespace-pre-line text-white">
                    {produk.detail}
                  </p>
                  <Button
                    as={Link}
                    href={produk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-[15px] bg-yellow-500 py-2 font-semibold"
                    variant="solid"
                    startContent={<IoMdLink />}
                  >
                    Menuju Halaman
                  </Button>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                    Berikut fitur pada sistem:
                  </h2>
                  <ul className="space-y-2">
                    {produk.features.map((fitur, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-white"
                      >
                        <IoIosCheckmarkCircle /> {fitur}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SLIDER GAMBAR */}
              <div className="pb-12">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {produk.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="overflow-hidden rounded-xl shadow-md">
                        <Image
                          src={img}
                          alt={`Gambar ${produk.title} ${i + 1}`}
                          width={600}
                          height={400}
                          className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Tab>
            <Tab key="demo" title="Demo">
              <div className="flex aspect-video h-[800px] w-full flex-col items-center justify-center">
                <iframe
                  src={produk.demoLink}
                  className="h-full w-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title={produk.title}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
