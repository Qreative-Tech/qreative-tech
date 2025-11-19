"use client";

import Lottie from "lottie-react";

type LottieProps = {
  animationData: any;
  loop?: boolean;
  style: {
    width: any;
    height: any;
  };
  className?: string;
};
export const LottieCompo = ({
  animationData,
  loop,
  style: { width = "100%", height = "100%" },
  className,
}: LottieProps) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      style={{ width: width, height: height }}
      className={className}
    />
  );
};
