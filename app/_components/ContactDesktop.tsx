"use client";

import { IconEmail } from "@/components/icons/IconEmail";
import { IconPhone } from "@/components/icons/IconPhone";
import { IconPoint } from "@/components/icons/IconPoint";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";

export const ContactDesktop = () => {
  return (
    <div className="bg-brand-900 relative flex h-[398px] w-full flex-col items-center justify-center rounded-tl-[28px] px-[40px]">
      <Card
        shadow="sm"
        className="absolute top-[-35px] right-[100px] z-1 flex w-[386px] flex-col gap-6 rounded-[11px] border-[0.68px] border-white/4 bg-white/2 p-[20px] px-[22px] pb-[20px] backdrop-blur-[43.48px]"
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
      <div className="mt-[62px] flex w-full flex-col items-start justify-start gap-2 px-[45px]">
        <h1 className="text-start [font-size:clamp(20px,6vw,36px)] font-bold text-white">
          Hubungi Kami Sekarang
        </h1>
        <p className="text-neutral-custom-100 [font-size:clamp(12px,3vw,18px)] font-medium lg:w-[550px] xl:w-full">
          konsultasi layanan jasa pembuatan website dengan dukungan ramah,
          responsif & komunikatif
        </p>
      </div>
      {/* Links */}
      <div className="flex w-full flex-col items-start justify-start gap-4 px-[45px] lg:mt-4 xl:mt-8">
        <div className="flex flex-row items-center gap-3">
          <Button
            size="lg"
            isIconOnly
            radius="full"
            aria-label="Phone"
            className="bg-[#292929]"
          >
            <IconEmail size={18} className="text-warning-300" />
          </Button>
          <p className="text-neutral-custom-400 text-[18px] font-medium">
            qreativetech@gmail.com
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            size="lg"
            isIconOnly
            radius="full"
            aria-label="Phone"
            className="bg-[#292929]"
          >
            <IconPhone size={18} className="text-warning-300" />
          </Button>
          <p className="text-neutral-custom-400 text-[18px] font-medium">
            (+62) 85231796284
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            size="lg"
            isIconOnly
            radius="full"
            aria-label="Phone"
            className="bg-[#292929]"
          >
            <IconPoint size={18} className="text-warning-300" />
          </Button>
          <p className="text-neutral-custom-400 text-[18px] font-medium">
            Jawa Timur, Indonesia Banyuwangi, 68482
          </p>
        </div>
      </div>
    </div>
  );
};
