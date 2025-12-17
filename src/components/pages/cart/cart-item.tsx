import Image from "next/image";

import QuantityButton from "@/components/features/quantity-button";

export function CartItem() {
  return (
    <div className="flex items-start gap-4 py-7">
      <Image
        alt="product image"
        className="size-20 object-contain rounded-md "
        height={80}
        src="/wine/wine-1.png"
        width={80}
      />
      <div className="flex flex-col grow-0 items-start gap-2">
        <a href="/13/">
          <h1 className="text-primary font-bold text-xl">
            Glen Talloch Blended Whisky Rare &amp; Old - 0.7l
          </h1>
        </a>
        <p className="text-brand-orange font-manrope font-bold">95,000₮</p>
        <div className="mt-1 flex"></div>
        <QuantityButton variant="ghost" />
      </div>
    </div>
  );
}
