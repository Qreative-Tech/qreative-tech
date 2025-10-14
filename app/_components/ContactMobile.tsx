"use client";

import { IconEmail } from "@/components/icons/IconEmail";
import { IconPhone } from "@/components/icons/IconPhone";
import { IconPoint } from "@/components/icons/IconPoint";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";

export const ContactMobile = () => {
  return (
    <div className="bg-brand-900 relative flex h-[650px] w-full items-center justify-center rounded-tl-[28px] px-[40px]">
      <Card
        shadow="sm"
        className="absolute top-[-35px] z-1 flex w-[300px] flex-col gap-6 rounded-[11px] border-[0.68px] border-white/4 bg-white/2 p-[20px] px-[22px] pb-[20px] backdrop-blur-[43.48px]"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Nama</label>
            <Input
              placeholder="John Carter"
              variant="flat"
              radius="sm"
              classNames={{
                inputWrapper:
                  "bg-white/5 border border-white/10 rounded-md h-[42px]",
                input: "text-white placeholder:text-white/40",
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Email</label>
            <Input
              placeholder="JohnCarter@gmail.com"
              variant="flat"
              radius="sm"
              classNames={{
                inputWrapper:
                  "bg-white/5 border border-white/10 rounded-md h-[42px]",
                input: "text-white placeholder:text-white/40",
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Message</label>
            <Textarea
              placeholder="Type your message"
              minRows={3}
              variant="flat"
              radius="sm"
              classNames={{
                inputWrapper: "bg-white/5 border border-white/10 rounded-md",
                input: "text-white placeholder:text-white/40",
              }}
            />
          </div>

          <Button
            className="mt-2 rounded-full border border-white/10 bg-transparent text-white"
            variant="bordered"
          >
            Kirim pesan
          </Button>
        </div>
      </Card>
      <div className="absolute top-[400px] flex w-full flex-col items-start justify-start gap-2 px-[45px]">
        <h1 className="text-start text-[20px] font-bold text-white">
          Hubungi Kami Sekarang
        </h1>
        <p className="text-neutral-custom-100 text-[12px] font-medium">
          konsultasi layanan jasa pembuatan website dengan dukungan ramah,
          responsif & komunikatif
        </p>
      </div>
      {/* Links */}
      <div className="absolute top-[500px] flex w-full flex-col items-start justify-start gap-2 px-[45px]">
        <div className="flex flex-row items-center gap-3">
          <Button
            as={Link}
            href="mailto:qreativetech@gmail.com"
            size="sm"
            isIconOnly
            radius="full"
            aria-label="Email"
            className="bg-[#292929]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconEmail size={12} className="text-warning-300" />
          </Button>
          <Link
            href="mailto:qreativetech@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[12px] font-medium transition-colors"
          >
            qreativetech@gmail.com
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            as={Link}
            href={`https://wa.me/6285231796284?text=${encodeURIComponent(
              "Halo! Saya tertarik dengan layanan pembuatan website dari Qreative Tech.",
            )}`}
            size="sm"
            isIconOnly
            radius="full"
            aria-label="Phone"
            className="bg-[#292929]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPhone size={12} className="text-warning-300" />
          </Button>
          <Link
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              "Halo! Saya tertarik dengan layanan pembuatan website dari Qreative Tech.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[12px] font-medium transition-colors"
          >
            (+62) 852-3179-6284
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            as={Link}
            href="https://www.google.com/maps?q=Banyuwangi,+Jawa+Timur,+Indonesia+68482"
            size="sm"
            isIconOnly
            radius="full"
            aria-label="Location"
            className="bg-[#292929]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPoint size={12} className="text-warning-300" />
          </Button>
          <Link
            href="https://www.google.com/maps?q=Banyuwangi,+Jawa+Timur,+Indonesia+68482"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[12px] font-medium transition-colors"
          >
            Jawa Timur, Indonesia — Banyuwangi, 68482
          </Link>
        </div>
      </div>
    </div>
  );
};
