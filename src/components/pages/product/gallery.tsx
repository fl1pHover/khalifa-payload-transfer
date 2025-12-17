"use client";

import type { Swiper as SwiperType } from "swiper";

import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/lib/utils";

export default function Gallery({ images }: { images: Array<string> }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperType>(null);
  const [activeThumb, setActiveThumb] = useState<null | number>(null);

  return (
    <div className="space-y-5">
      <Swiper
        className="aspect-square rounded-2xl"
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          enabled: true,
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              alt="asd"
              className="size-full object-cover"
              height={100}
              src={img}
              width={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="mySwiper"
        freeMode={true}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={10}
        watchSlidesProgress={true}
      >
        {images.map((img, i) => (
          <SwiperSlide className={cn("overflow-visible!")} key={i}>
            <Image
              alt="asd"
              className={cn(
                i === activeThumb && "border-2 border-brand-orange",
                "cursor-pointer w-full aspect-square rounded-md object-cover"
              )}
              height={100}
              onClick={() => setActiveThumb(i)}
              src={img}
              width={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
