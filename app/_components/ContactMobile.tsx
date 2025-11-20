"use client";

import { IconEmail } from "@/components/icons/IconEmail";
import { IconPhone } from "@/components/icons/IconPhone";
import { IconPoint } from "@/components/icons/IconPoint";
import { EMAIL, NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { useState } from "react";

export const ContactMobile = () => {
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
    const text = `Halo Nadanta!
Saya ingin menghubungi melalui form di website.

Nama: ${nama || "-"}
Email: ${email || "-"}
Pesan: ${pesan || "-"}

Terima kasih`;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

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
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="John Carter"
              variant="flat"
              radius="sm"
              classNames={{
                inputWrapper:
                  "bg-white/5 border border-white/10 rounded-md h-[42px] transition-colors data-[hover=true]:bg-neutral-custom-700 data-[focus=true]:bg-neutral-custom-700",
                input:
                  "!text-white placeholder:!text-white/40 transition-colors data-[focus=true]:!text-white",
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
                  "bg-white/5 border border-white/10 rounded-md h-[42px] transition-colors data-[hover=true]:bg-neutral-custom-700 data-[focus=true]:bg-neutral-custom-700",
                input:
                  "!text-white placeholder:!text-white/40 transition-colors data-[focus=true]:!text-white",
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
                inputWrapper:
                  "bg-white/5 border border-white/10 rounded-md  transition-colors data-[hover=true]:bg-neutral-custom-700 data-[focus=true]:bg-neutral-custom-700",
                input:
                  "!text-white placeholder:!text-white/40 transition-colors data-[focus=true]:!text-white",
              }}
            />
            {errors.pesan && (
              <p className="mt-1 text-xs text-red-400">{errors.pesan}</p>
            )}
          </div>

          <Button
            onPress={handleSendWhatsApp}
            className="hover:bg-neutral-custom-700 hover:border-accent-500 mt-2 rounded-full border border-white/10 bg-transparent text-white transition duration-200 ease-in-out"
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
            href={`"mailto:${EMAIL}"`}
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
            href={`"mailto:${EMAIL}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[12px] font-medium transition-colors"
          >
            {EMAIL}
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            as={Link}
            href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
              "Halo! Saya tertarik dengan layanan pembuatan website dari Nadanta.",
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
              "Halo! Saya tertarik dengan layanan pembuatan website dari Nadanta.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[12px] font-medium transition-colors"
          >
            (+62) 823-4361-3521
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            as={Link}
            href="https://maps.app.goo.gl/t3ZidY4guzkMg8uK7"
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
            href="https://maps.app.goo.gl/t3ZidY4guzkMg8uK7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-custom-400 hover:text-warning-400 text-[12px] font-medium transition-colors"
          >
            Jawa Timur, Indonesia — Jember, 68123
          </Link>
        </div>
      </div>
    </div>
  );
};
