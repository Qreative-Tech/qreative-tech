"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

export default function CardPaketLayananDesktop() {
  // Tambahkan satu data paket agar total 3
  const paketData = [
    {
      title: "Paket Website Business",
      startPrice: "3.000.000",
      desc: "Praktis dan ekonomis untuk merintis bisnis",
      options: [
        { name: "Starter", price: "IDR 3.000.000" },
        { name: "Growth", price: "IDR 5.000.000" },
        { name: "Pro", price: "IDR 10.000.000" },
      ],
    },
    {
      title: "Paket Website Premium",
      startPrice: "7.000.000",
      desc: "Fitur lengkap dan tampilan profesional",
      options: [
        { name: "Starter", price: "IDR 7.000.000" },
        { name: "Growth", price: "IDR 12.000.000" },
        { name: "Pro", price: "IDR 20.000.000" },
      ],
    },
    {
      title: "Paket Website Custom",
      startPrice: "15.000.000",
      desc: "Solusi website sesuai kebutuhan bisnis Anda",
      options: [
        { name: "Starter", price: "IDR 15.000.000" },
        { name: "Growth", price: "IDR 25.000.000" },
        { name: "Pro", price: "IDR 40.000.000" },
      ],
    },
  ];

  return (
    <div className="relative mt-8 grid w-full max-w-[1200px] place-items-center items-stretch justify-center gap-8 md:grid-cols-3">
      {paketData.map((paket, idx) => (
        <Card
          key={idx}
          radius="none"
          className={`border-accent-700 relative flex w-full flex-col rounded-b-2xl border-2 bg-gradient-to-b from-[#282828] to-[#1C1C1C] ${
            idx === 1 ? "h-fit max-w-[420px]" : "mt-[25px] h-fit max-w-[350px]"
          }`}
        >
          {/* Header paket */}
          <CardHeader className="bg-accent-800 flex w-full flex-row items-center justify-center rounded-b-xl px-[30.53px] py-[17.45px]">
            <h1 className="text-warning-400 text-center text-[18px] font-semibold">
              {paket.title}
            </h1>
          </CardHeader>
          <CardBody className="mt-3 flex flex-1 flex-col items-center gap-4">
            {/* Harga utama */}
            <div className="text-center">
              <p className="text-neutral-custom-600 text-sm font-bold">
                Start from
              </p>
              <h2
                className={`mt-2 ${idx === 1 ? "text-3xl" : "text-2xl"} font-bold text-white`}
              >
                {paket.startPrice}
              </h2>
              <div className="mt-4 rounded-lg bg-[#282829] px-[24px] py-[6px]">
                <p
                  className={`text-neutral-custom-400 ${idx === 1 ? "text-sm" : "text-xs"}`}
                >
                  {paket.desc}
                </p>
              </div>
            </div>

            {/* Daftar pilihan paket */}
            <div
              className={`border-neutral-custom-700 w-full ${idx === 1 ? "space-y-2" : "space-y-0"} rounded-lg border p-3 text-sm`}
            >
              {paket.options.map((opt, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2"
                >
                  <span>{opt.name}</span>
                  <span>{opt.price}</span>
                </div>
              ))}
            </div>

            {/* Tombol pilih */}
            <Button
              variant="solid"
              color="secondary"
              radius="full"
              className={`border-accent-700 ${idx === 1 ? "my-5" : "my-0"} ${idx === 1 ? "unset" : "mb-2"} h-[40px] min-w-[150px] border px-[18px] py-[10px] text-sm text-[14px] font-bold`}
              as={Link}
              href={`https://wa.me/6285231796284?text=${encodeURIComponent(
                `Halo! Saya tertarik dengan *${paket.title}* yang ditawarkan di Qreative Tech. Bisa dibantu jelaskan detail dan proses pemesanannya?`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pilih Paket
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
