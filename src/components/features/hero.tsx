'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HERO_LIST } from '@/lib/constants'
import useHydration from '@/lib/use-hydration'

export default function Hero() {
  const isHydrated = useHydration()

  return (
    <div className="aspect-2/1 md:aspect-3/1 ">
      {isHydrated && (
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          className="h-full"
          loop={true}
          modules={[Pagination, A11y, Autoplay]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`
            },
          }}
          slidesPerView={1}
        >
          {HERO_LIST.map((image, index) => {
            return (
              <SwiperSlide className="size-full" key={index}>
                <Image
                  alt="hero image"
                  className="size-full object-cover"
                  fill
                  placeholder="blur"
                  src={image.src}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}
