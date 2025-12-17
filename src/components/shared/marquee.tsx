"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useHydration from "@/lib/use-hydration";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  bg?: string;
}

export default function Marquee({ bg = "bg-dark" }: MarqueeProps) {
  const isHydrated = useHydration();

  return (
    <div className={cn("w-screen overflow-x-hidden", bg)}>
      <div className="flex items-center mx-auto h-20 md:h-36 overflow-hidden py-4">
        {isHydrated && (
          <Swiper
            autoplay={{
              delay: 0,
            }}
            className="h-full w-screen pointer-events-none swiper-marquee"
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            loop={true}
            modules={[Autoplay, FreeMode]}
            slidesPerView={"auto"}
            spaceBetween={40}
            speed={2000}
            style={
              {
                "--swiper-wrapper-transition-timing-function": "linear",
              } as React.CSSProperties
            }
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <SwiperSlide
                className="max-w-fit flex! items-center justify-center w-fit"
                key={i}
              >
                <Image
                  alt="brand logo"
                  className="h-12 md:h-full object-contain w-auto"
                  height={500}
                  src={"/banner/banner-logo.png"}
                  width={500}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
