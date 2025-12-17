"use client";

import { Info } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PAYMENT_LIST } from "@/constants";
import useHydration from "@/lib/use-hydration";
import { showToast } from "@/lib/use-toast";
import { cn } from "@/lib/utils";

export default function Page() {
  const isHydrated = useHydration();

  return (
    <section>
      <div className="bg-brand-orange/10">
        <div className="container flex items-center gap-4 py-6!">
         <Image alt="qr" className="size-15 aspect-square" height={60} src={'/qr.svg'} width={60} />
          <h1 className="text-2xl lg:text-4xl font-bold">Төлбөр төлөх</h1>
        </div>
      </div>
      <div className="container flex-col lg:flex-row flex py-10! ">
        <div className="max-w-md mx-auto pb-5 lg:pb-0 lg:pr-16">
          <h3 className="mb-5 md:mb-10 text-2xl font-semibold text-center">QR код уншуулах:</h3>
          <div className="flex items-center justify-center">
           <div className="size-60 bg-gray-200"></div>
          </div>

          <Button className="w-full mt-10 font-bold text-xl" onClick={()=> {
            showToast('error','Төлбөр төлөгдөөгүй байна')
          }} size={'xl'} variant={'orange'}>Гүйлгээ шалгах</Button>
        </div>
        <div className="w-full pt-5 lg:pt-0 lg:pl-16 border-t lg:border-l space-y-10">
          <h1 className="text-center text-2xl font-bold">Банкны апп -р төлөх:</h1>

          {isHydrated && (
            <div className="flex flex-wrap justify-center">
              {PAYMENT_LIST.map((pay) => {
                return (
                  <div className="flex w-[104px] flex-col items-center p-2 gap-2 text-sm text-center font-semibold" key={pay.name}>
                    <Image alt={cn(pay.name + " logo")} className="size-14" height={56} src={pay.image} width={56} />
                    <h1 className="font-bold">{pay.name}</h1>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="bg-accent">
       <div className="container py-6! flex items-start gap-3">
        <Info className="size-8" />
        <p className="text-base font-medium">Төлбөр төлөгдсөний дараа захиалга баталгаажих ба та бүх төрлийн банкны аппликейшныг ашиглан OR кодыг уншуулах эсвэл дараах банкны апп -уудаар нэвтрэн төлбөр төлөх боломжтой. Төлбөр төлөгдсөний дараа хуудас автоматаар солигдохгүй бол гүйлгээ шалгах товчийг дарна уу. </p>
       </div>
      </div>
    </section>
  );
}
