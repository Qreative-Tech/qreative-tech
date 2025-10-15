import bg from "@/assets/bg.png";
import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { NOMORWA } from "@/utils/constans";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function AboutPage() {
  return (
    <div className="w-full">
      <div
        className="bg w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="mx-4 grid grid-cols-1 gap-8 py-6 text-black md:mx-[50px] md:grid-cols-3 md:py-[250px]">
          <div className="justify-center md:col-span-1">
            <h2 className="mb-3 md:text-xl md:font-semibold">
              Selamat datang di Qreative Tech
            </h2>
            <h1 className="mb-3 [font-size:clamp(28px,6vw,55px)] font-bold md:leading-[70px]">
              Jasa pembuatan website murah dan terpercaya
            </h1>
            <Button
              className="md:mt-5"
              variant="solid"
              color="danger"
              endContent={<IconRightArrow />}
              as={Link}
              href={`https://wa.me/${NOMORWA}?text=${encodeURIComponent(
                "Halo! Saya mau pesan jasa pembuatan website dari kamu. Bisa bantu prosesnya sekarang?",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan Sekarang
            </Button>
          </div>
          <div className="flex flex-col gap-1 md:col-span-2 md:ps-[130px]">
            <h2 className="mb-3 leading-[30px] font-normal md:text-xl">
              Selain layanan web builder, layanan lain yaitu jasa design flyer,
              logo, id card dan lain-lain yang berkaitan dengan digital promote
              atau branding. Jadi, Qreative Tech berfokus pada layanan{" "}
              <span className="font-extrabold">digital kreatif</span> dan{" "}
              <span className="font-extrabold">tech service.</span>
            </h2>
            <h2 className="mb-3 leading-[30px] font-normal md:text-xl">
              Qreative Tech dimulai pada tahun 2024, walaupun terbilang masih
              dini, kami akan memberikan pelayanan semaksimal mungkin dengan
              <span className="font-extrabold"> evaluasi berkala</span> agar
              kami tetap terus berkembang.
            </h2>
            <h2 className="mb-3 leading-[30px] font-normal md:text-xl">
              Kami berkomitmen untuk menjaga{" "}
              <span className="font-extrabold">kualitas pelayanan,</span>{" "}
              menerima segala kritik maupun saran customer dan melakukan layanan
              dengan sepenuh hati kepada customer. Kami berharap layanan kami
              dapat membantu customer dan sesuai dengan yang customer harapkan.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
