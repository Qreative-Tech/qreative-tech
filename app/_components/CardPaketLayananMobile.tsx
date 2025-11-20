"use client";

import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { useState } from "react";

const paketData = [
  {
    title: "Paket Starter",
    startPrice: "3.000.000",
    desc: "Untuk kamu yang baru mulai membangun kehadiran online bisnis",
    options: [
      {
        name: "Desain website profesional (1–3 halaman)",
        price: "IDR 3.000.000",
      },
      { name: "Mobile-friendly", price: "IDR 5.000.000" },
      { name: "Integrasi WhatsApp & media sosial", price: "IDR 10.000.000" },
      { name: "Hosting & domain 1 tahun", price: "IDR 10.000.000" },
      { name: "Dukungan teknis dasar", price: "IDR 10.000.000" },
    ],
  },
  {
    title: "Paket Pro",
    startPrice: "7.000.000",
    desc: "Fitur lengkap dan tampilan profesional",
    options: [
      { name: "Desain custom & interaktif", price: "IDR 7.000.000" },
      { name: "Hingga 10 halaman website", price: "IDR 12.000.000" },
      { name: "Fitur blog & portofolio", price: "IDR 20.000.000" },
      { name: "Integrasi SEO dasar", price: "IDR 20.000.000" },
      { name: "Email bisnis profesional", price: "IDR 20.000.000" },
      { name: "Maintenance & update bulanan", price: "IDR 20.000.000" },
    ],
  },
];

export default function CardPaketLayananMobile() {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(false);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? paketData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === paketData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mt-8 flex w-full flex-col items-center">
      {/* Tombol kiri */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-[-45px] z-1 -translate-y-1/2 p-2 text-white"
      >
        <IconRightArrow
          size={30}
          className="text-accent-600 rotate-[-180deg]"
          variant="Bold"
        />
      </button>

      {/* Card */}
      <Card
        radius="none"
        isPressable
        onPress={() => {
          // console.log("clicked");
          setActive((s) => !s);
        }}
        className={`group relative w-full max-w-[300px] rounded-b-2xl border-3 border-t-0 transition duration-300 ease-in-out ${
          active
            ? "border-neutral-custom-600 bg-gradient-to-b from-[#303030] to-[#1C1C1C]"
            : "border-accent-700 bg-gradient-to-b from-[#282828] to-[#1C1C1C]"
        }`}
      >
        {/* Header paket */}
        <CardHeader
          className={`flex w-full flex-row items-center justify-center rounded-b-xl px-[30.53px] py-[17.45px] transition duration-300 ease-in-out ${
            active ? "bg-warning-300" : "bg-accent-800"
          }`}
        >
          <h1
            className={`text-center text-[18px] font-[700] ${
              active ? "text-accent-800" : "text-warning-400"
            }`}
          >
            {paketData[current].title}
          </h1>
        </CardHeader>
        <CardBody className="mt-3 flex flex-col items-center gap-4">
          {/* Harga utama */}
          <div className="text-center">
            <div
              className={`rounded-lg px-[24px] py-[6px] transition duration-300 ease-in-out ${
                active ? "bg-neutral-custom-700" : "bg-[#282829]"
              }`}
            >
              <p className="text-neutral-custom-400 text-sm">
                {paketData[current].desc}
              </p>
            </div>
          </div>

          {/* Daftar pilihan paket */}
          <div className="border-neutral-custom-700 mt-3 w-full space-y-2 rounded-lg border text-sm">
            {paketData[current].options.map((opt, i) => (
              <div
                key={i}
                className={`${i % 2 !== 0 ? "bg-neutral-custom-800" : ""} flex items-center justify-center px-3 py-3 text-center`}
              >
                <span>{opt.name}</span>
              </div>
            ))}
          </div>

          {/* Tombol pilih */}
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="border-accent-700 my-5 h-[40px] min-w-[150px] border px-[18px] py-[10px] text-sm text-[14px] font-bold"
            as={Link}
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              `Halo! Saya tertarik dengan *${paketData[current].title}* yang ditawarkan di Nadanta. Bisa dibantu jelaskan detail dan proses pemesanannya?`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pilih Paket
          </Button>
        </CardBody>
      </Card>

      {/* Tombol kanan */}
      <button
        onClick={next}
        className="absolute top-1/2 right-[-40px] -translate-y-1/2"
      >
        <IconRightArrow size={30} className="text-accent-600" variant="Bold" />
      </button>

      {/* Indicator bar */}
      <div className="mt-5 flex gap-2">
        {paketData.map((_, i) => (
          <span
            key={i}
            className={`h-1 w-8 rounded-full transition-all ${
              i === current ? "bg-warning-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
