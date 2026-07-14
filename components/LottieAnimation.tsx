"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieAnimationProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

export default function LottieAnimation({
  src,
  autoplay = true,
  loop = true,
  className = "",
}: LottieAnimationProps) {
  return (
    <div className={className}>
      <DotLottieReact src={src} autoplay={autoplay} loop={loop} />
    </div>
  );
}
