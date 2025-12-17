import Image from "next/image";
import Link from "next/link";

import CheckoutSummary from "@/components/pages/cart/checkout-summary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Page() {
  return (
    <section className="max-w-2k mx-auto py-0! relative">
      <div className="grid grid-cols-2  md:grid-cols-5 top-20 gap-y-5 md:gap-5">
        <div className="col-span-2 relative md:pb-15 md:pl-5">
          <div className="border bg-[#fafafb] md:rounded-xl flex flex-col gap-8 container-half w-full md:sticky top-30 shadow">
            <h1 className="text-2xl font-bold">Захиалга баталгаажуулалт</h1>
            <div className="space-y-4">
              <div className="space-y-2 col-span-2 xl:col-span-1">
                <Label className="text-xl text-primary/80">Нэр</Label>
                <Input required />
              </div>
              <div className="space-y-2 col-span-2 xl:col-span-1">
                <Label className="text-xl text-primary/80">Утасны дугаар</Label>
                <Input required />
              </div>
              <div className="space-y-2 col-span-2">
                <Label className="text-xl text-primary/80">Хаяг</Label>
                <Input required />
              </div>
              <div className="space-y-3 col-span-full">
                <Label className="text-xl font-bold">И-баримт</Label>
                <RadioGroup
                  className="flex flex-col  gap-x-10 gap-y-4"
                  defaultValue="option-one"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="person" value="person" />
                    <Label className="text-sm" htmlFor="person">
                      Хувь хүн
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="company" value="company" />
                    <Label className="text-sm" htmlFor="company">
                      Албан байгууллага
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="residence" value="residence" />
                    <Label className="text-sm" htmlFor="residence">
                      Татвар төлөгч иргэн
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col container-half border-l">
          <h1 className="text-2xl font-bold">Захиалгын мэдээлэл</h1>

          <div className="flex flex-col divide-y">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="flex items-start gap-4 py-7" key={i}>
                <Image
                  alt="product image"
                  className="size-20 object-contain rounded-md "
                  height={80}
                  src="/wine/wine-1.png"
                  width={80}
                />
                <div className="flex flex-col grow-0 items-start gap-2">
                  <a href="/13/">
                    <h1 className="text-brandBlack font-bold text-xl">
                      Glen Talloch Blended Whisky Rare &amp; Old - 0.7l
                    </h1>
                  </a>
                  <p className="text-brand-orange font-manrope font-bold">
                    95,000₮
                  </p>
                  <div className="mt-1 flex"></div>
                  <Label>1 ширхэг</Label>
                </div>
              </div>
            ))}
          </div>

          <CheckoutSummary
            action={
              <Link href="/cart/payment">
                <Button className="w-full" size={"xl"} variant={"orange"}>
                  Төлбөр төлөх
                </Button>
              </Link>
            }
            totalPrice={5000}
          />
        </div>
      </div>
    </section>
  );
}
