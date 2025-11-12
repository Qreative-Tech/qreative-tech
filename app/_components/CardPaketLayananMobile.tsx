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
        className="border-accent-700 relative w-full max-w-[300px] rounded-b-2xl border bg-gradient-to-b from-[#282828] to-[#1C1C1C]"
      >
        {/* Header paket */}
        <CardHeader className="bg-accent-800 flex w-full flex-row items-center justify-center rounded-b-xl px-[30.53px] py-[17.45px]">
          <h1 className="text-warning-200 text-center text-[18px] font-[700]">
            {paketData[current].title}
          </h1>
        </CardHeader>
        <CardBody className="mt-3 flex flex-col items-center gap-4">
          {/* Harga utama */}
          <div className="text-center">
            {/* <p className="text-neutral-custom-600 text-sm font-bold">
              Start from
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              {paketData[current].startPrice}
            </h2> */}
            <div className="rounded-lg bg-[#282829] px-[24px] py-[6px]">
              <p className="text-neutral-custom-400 text-sm">
                {paketData[current].desc}
              </p>
            </div>
          </div>

          {/* Daftar pilihan paket */}
          <div className="border-neutral-custom-700 w-full space-y-2 rounded-lg border p-3 text-sm">
            {paketData[current].options.map((opt, i) => (
              <div key={i} className="flex items-center gap-4 px-3 py-2">
                <span>-</span>
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
              `Halo! Saya tertarik dengan *${paketData[current].title}* yang ditawarkan di Qreative Tech. Bisa dibantu jelaskan detail dan proses pemesanannya?`,
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
