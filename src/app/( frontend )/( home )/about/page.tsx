import Image from 'next/image'

import Marquee from '@/components/shared/marquee'
import { ABOUT } from '@/lib/constants'
export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <Image
        alt="Banner image"
        className="relative w-full h-auto max-h-[674px] object-cover object-center"
        height={600}
        src={'/about/hero.jpg'}
        width={1200}
      />
      <Marquee bg="bg-primary" />
      <section className="container space-y-5 md:space-y-8">
        <h1 className="font-serif text-4xl md:text-[80px] md:leading-normal text-center font-semibold">
          Khalifa Beverage
        </h1>
        <p className="font-medium md:text-xl md:leading-normal text-justify">
          Халифа компани нь 2023 оноос эхлэн шингэн хүнсний шилдэг брэндүүдийг европын орнуудын
          үйлдвэрээс нь албан ёсны эрхтэйгээр монголын зах зээлд нэвтрүүлэн ажиллаж байна. Хүссэн
          бүтээгдэхүүнээ захиалан, түргэн шуурхай, найдвартай хүргүүлэн авах хүргэлтийн шинэлэг
          инновацыг хувь хүмүүс болон албан байгууллагуудад санал болгож бөөний үнээр хүргэхийг
          зорин ажиллаж байна.
        </p>
      </section>
      <section className="bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="order-1 lg:order-2 basis-full flex items-center">
              <Image
                alt="about"
                className="rounded-lg w-full h-auto"
                height={1000}
                src={'/about/about.jpg'}
                width={1000}
              />
            </div>
            <div className="flex flex-col shrink justify-center order-2 lg:order-1">
              {ABOUT.map((info, index) => {
                return (
                  <div
                    className={index === ABOUT.length - 1 ? 'flow-dot-last' : 'flow-dot'}
                    key={info.id}
                  >
                    <h2 className="text-xl font-bold md:text-4xl">{info.title}</h2>
                    <p className="text-sm md:text-xl md:leading-normal text-justify mb-8 md:mb-20 font-medium">
                      {info.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
