"use client";

import { IconEmail } from "@/components/icons/IconEmail";
import { IconPhone } from "@/components/icons/IconPhone";
import { IconPoint } from "@/components/icons/IconPoint";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { useState } from "react";

export const ContactDesktop = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { nama: "", email: "", pesan: "" };

    if (!nama.trim()) {
      newErrors.nama = "Nama tidak boleh kosong";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email tidak boleh kosong";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Format email tidak valid";
      isValid = false;
    }

    if (!pesan.trim()) {
      newErrors.pesan = "Pesan tidak boleh kosong";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;

    const nomor = NOMORWA;
    const text = `Halo Qreative Tech!
  Saya ingin menghubungi melalui form di website.
  
  Nama: ${nama || "-"}
  Email: ${email || "-"}
  Pesan: ${pesan || "-"}
  
  Terima kasih`;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

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
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="John Carter"
              variant="flat"
              radius="sm"
              classNames={{
                inputWrapper:
                  "bg-white/5 border border-white/10 rounded-md h-[42px]",
                input: "text-white placeholder:text-white/40",
              }}
            />
            {errors.nama && (
              <p className="mt-1 text-xs text-red-400">{errors.nama}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="JohnCarter@gmail.com"
              variant="flat"
              radius="sm"
              classNames={{
                inputWrapper:
                  "bg-white/5 border border-white/10 rounded-md h-[42px]",
                input: "text-white placeholder:text-white/40",
              }}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">Message</label>
            <Textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Type your message"
              minRows={3}
              variant="flat"
              radius="sm"
              classNames={{
                inputWrapper: "bg-white/5 border border-white/10 rounded-md",
                input: "text-white placeholder:text-white/40",
              }}
            />
            {errors.pesan && (
              <p className="mt-1 text-xs text-red-400">{errors.pesan}</p>
            )}
          </div>

          <Button
            onPress={handleSendWhatsApp}
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
            as={Link}
            href="mailto:qreativetech@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            isIconOnly
            radius="full"
            aria-label="Email"
            className="bg-[#292929]"
          >
            <IconEmail size={18} className="text-warning-300" />
          </Button>
          <Link
            href="mailto:qreativetech@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[18px] font-medium transition-colors"
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
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            isIconOnly
            radius="full"
            aria-label="Phone"
            className="bg-[#292929]"
          >
            <IconPhone size={18} className="text-warning-300" />
          </Button>
          <Link
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              "Halo! Saya tertarik dengan layanan pembuatan website dari Qreative Tech.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[18px] font-medium transition-colors"
          >
            (+62) 852-3179-6284
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            as={Link}
            href="https://www.google.com/maps?q=Banyuwangi,+Jawa+Timur,+Indonesia+68482"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            isIconOnly
            radius="full"
            aria-label="Phone"
            className="bg-[#292929]"
          >
            <IconPoint size={18} className="text-warning-300" />
          </Button>
          <Link
            href="https://www.google.com/maps?q=Banyuwangi,+Jawa+Timur,+Indonesia+68482"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[18px] font-medium transition-colors"
          >
            Jawa Timur, Indonesia — Banyuwangi, 68482
          </Link>
        </div>
      </div>
    </div>
  );
};
