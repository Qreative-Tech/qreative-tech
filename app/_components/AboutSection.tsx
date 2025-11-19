"use client";

import LottieAsset from "@/assets/lotties/Ai based chatbot discuss (5).json";
import { IconRightArrow } from "@/components/icons/IconRightArrow";
import { LottieCompo } from "@/components/lottie";
import { useRouter } from "next/navigation";

export const AboutSection = () => {
  const router = useRouter();
  return (
    <div className="z-10">
      {/* Mobile */}
      <div className="my-[82px] flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg:hidden">
        {/* <div className="bg-neutral-custom-800 rounded-[37px]"> */}
        {/* <Image src="/group.svg" alt="group" width={252} height={165} /> */}
        <LottieCompo
          animationData={LottieAsset}
          style={{
            width: "252px",
            height: "165px",
          }}
          loop={true}
        />
        {/* </div> */}
        <div className="mt-5 flex flex-col items-start justify-center px-[50px]">
          <h1 className="text-neutral-custom-200 text-start text-[24px] font-bold">
            Tentang Kami
          </h1>
          <p className="mt-4 bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text text-[12px] font-normal text-transparent">
            Nadanta merupakan sebuah digital agency spesialis yang menyediakan
            layananan pembuatan website kebutuhan industri, perusahaan maupun
            personal. Nadanta dimulai pada tahun 2024, walaupun terbilang masih
            dini, kami akan memberikan pelayanan semaksimal mungkin dengan
            evaluasi berkala agar kami tetap terus berkembang.
          </p>
          <div
            className="mt-3 flex cursor-pointer flex-row items-center gap-2"
            onClick={() => router.push("/about")}
          >
            <p className="text-warning-300 text-[14px] font-bold">Read more</p>
            <IconRightArrow
              size={14}
              className="text-warning-500"
              variant="Bold"
            />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="my-[82px] hidden h-[733px] w-full flex-row items-center justify-center gap-4 px-[100px] py-8 md:py-10 lg:flex">
        {/* <Image src="/groupEllipse.svg" alt="group" width={569} height={389} /> */}
        <LottieCompo
          animationData={LottieAsset}
          style={{
            width: "569px",
            height: "389px",
          }}
          loop={true}
        />
        <div className="mt-5 flex flex-col items-start justify-center px-[50px]">
          <h1 className="text-neutral-custom-200 text-start [font-size:clamp(24px,6vw,44px)] font-bold">
            Tentang Kami
          </h1>
          <p className="mt-4 max-w-[547px] bg-gradient-to-b from-[#C2C2C2] to-[#696969] bg-clip-text [font-size:clamp(12px,6vw,20px)] font-normal text-transparent">
            Nadanta merupakan sebuah digital agency spesialis yang menyediakan
            layananan pembuatan website kebutuhan industri, perusahaan maupun
            personal. Nadanta dimulai pada tahun 2024, walaupun terbilang masih
            dini, kami akan memberikan pelayanan semaksimal mungkin dengan
            evaluasi berkala agar kami tetap terus berkembang.
          </p>
          <div
            className="mt-3 flex cursor-pointer flex-row items-center gap-2"
            onClick={() => router.push("/about")}
          >
            <p className="text-warning-300 text-[18px] font-bold">Read more</p>
            <IconRightArrow
              size={18}
              className="text-warning-500"
              variant="Bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
