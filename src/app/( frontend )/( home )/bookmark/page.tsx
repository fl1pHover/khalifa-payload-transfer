import Image from "next/image";

import ProductGrid from "@/components/pages/product/product-grid";
import { getProducts } from "@/lib/productGet";

export default async function Page() {
  const products = await getProducts();

  return (
    <section>
      <div className="relative w-full h-full">
        <Image
          alt="bookmark banner"
          className="relative overflow-hidden h-[148px] w-full md:h-[248px] transition-all object-cover object-center"
          height={600}
          src="/banner/banner-1.png"
          width={1200}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-3xl lg:text-6xl text-center">
          Favoured Products
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 gap-y-20 md:grid-cols-3 lg:gap-x-7 xl:grid-cols-4">
            {/* TODO: Tur slice */}
            <ProductGrid products={products.slice(0, 4)} />
          </div>
        </div>
      </div>
    </section>
  );
}
