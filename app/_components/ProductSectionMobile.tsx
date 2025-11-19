import { Image } from "@heroui/image";
import CardProductMobile from "./CardProductMobile";

export const ProductSectionMobile = () => {
  return (
    <div
      id="product"
      className="relative flex h-auto w-full flex-col items-center justify-center gap-[42px] rounded-tl-[24px] rounded-br-[12px] pt-[72px] pb-[62px] text-white md:hidden md:rounded-tl-[100px] md:rounded-br-[72px] md:px-[96px] md:py-[96px]"
    >
      <div className="flex w-full flex-col items-center gap-[6px] px-[58px]">
        <h1 className="[font-size:clamp(24px,6vw,44px)] font-semibold text-white md:text-5xl">
          Produk Kami
        </h1>
        <p className="text-neutral-custom-500 text-center text-[14px] font-medium">
          Tinjau sebagian dari proyek-proyek website terbaik nadanta
        </p>
      </div>
      <CardProductMobile />

      <div className="absolute top-[500px] z-0">
        <Image src="/Ellipse.svg" />
      </div>
    </div>
  );
};
