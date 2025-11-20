"use client";

import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

export default function CardPaketLayananDesktop() {
  // Tambahkan satu data paket agar total 3
  const paketData = [
    // {
    //   title: "Paket Website Business",
    //   startPrice: "3.000.000",
    //   desc: "Praktis dan ekonomis untuk merintis bisnis",
    //   options: [
    //     { name: "Starter", price: "IDR 3.000.000" },
    //     { name: "Growth", price: "IDR 5.000.000" },
    //     { name: "Pro", price: "IDR 10.000.000" },
    //   ],
    // },
    {
      title: "Paket Starter",
      startPrice: "7.000.000",
      desc: "Untuk kamu yang baru mulai membangun",
      options: [
        {
          name: "Desain website profesional (1–3 halaman)",
          price: "IDR 7.000.000",
        },
        { name: "Mobile-friendly", price: "IDR 12.000.000" },
        { name: "Integrasi WhatsApp & media sosial", price: "IDR 20.000.000" },
        { name: "Hosting & domain 1 tahun", price: "IDR 20.000.000" },
        { name: "Dukungan teknis dasar", price: "IDR 20.000.000" },
      ],
    },
    {
      title: "Paket Pro",
      startPrice: "15.000.000",
      desc: "Fitur lengkap dan tampilan profesional",
      options: [
        { name: "Desain custom & interaktif", price: "IDR 7.000.000" },
        { name: "Hingga 10 halaman website", price: "IDR 12.000.000" },
        { name: "Integrasi SEO dasar", price: "IDR 20.000.000" },
        { name: "Email bisnis profesional", price: "IDR 20.000.000" },
        { name: "Maintenance & update bulanan", price: "IDR 20.000.000" },
      ],
    },
  ];

  return (
    <div
      className={`relative mt-[62px] grid w-fit max-w-[1200px] place-items-center items-stretch justify-center gap-8 md:grid-cols-2`}
    >
      {paketData.map((paket, idx) => (
        <Card
          key={idx}
          radius="none"
          className={`group hover:border-neutral-custom-600 border-accent-700 relative flex h-fit w-full max-w-[420px] flex-col rounded-b-2xl border-3 border-t-0 bg-gradient-to-b from-[#282828] to-[#1C1C1C] transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-[#303030] hover:to-[#1C1C1C]`}
        >
          {/* Header paket */}
          <CardHeader className="bg-accent-800 group-hover:bg-warning-300 flex w-full flex-row items-center justify-center rounded-b-xl px-[30.53px] py-[17.45px] transition duration-300 ease-in-out">
            <h1 className="group-hover:text-accent-800 text-warning-400 text-center text-[24px] font-semibold">
              {paket.title}
            </h1>
          </CardHeader>
          <CardBody className="flex flex-1 flex-col items-center gap-4">
            {/* Harga utama */}
            <div className="text-center">
              {/* <p className="text-neutral-custom-600 text-sm font-bold">
                Start from
              </p> */}
              {/* <h2
                className={`mt-2 ${idx === 1 ? "text-3xl" : "text-2xl"} font-bold text-white`}
              >
                {paket.startPrice}
              </h2> */}
              <div className="group-hover:bg-neutral-custom-700 mt-4 rounded-lg bg-[#282829] px-[24px] py-[6px] transition duration-300 ease-in-out">
                <p className={`text-neutral-custom-400 text-sm`}>
                  {paket.desc}
                </p>
              </div>
            </div>

            {/* Daftar pilihan paket */}
            <div
              className={`border-neutral-custom-700 w-full space-y-2 rounded-lg border py-3 text-sm`}
            >
              {paket.options.map((opt, i) => (
                <div
                  key={i}
                  className={`${i % 2 !== 0 ? "bg-neutral-custom-800" : ""} flex items-center justify-center gap-4 px-3 py-2 text-center`}
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
              className={`border-accent-700 "my-5" unset h-[40px] min-w-[150px] border px-[18px] py-[10px] text-sm text-[14px] font-bold`}
              as={Link}
              href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
                `Halo! Saya tertarik dengan *${paket.title}* yang ditawarkan di Nadanta. Bisa dibantu jelaskan detail dan proses pemesanannya?`,
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
