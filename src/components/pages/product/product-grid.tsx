"use client";

import { Heart } from "lucide-react";

import ProductCard from "@/components/features/product-card";
import QuantityButton from "@/components/features/quantity-button";
import { Button } from "@/components/ui/button";
import { getCategoryTitle } from "@/lib/func";
import { showToast } from "@/lib/use-toast";
import { Product } from "@/types";

export default function ProductGrid({ products }: { products: Product[] }) {
  return products.map((product) => (
    <ProductCard
      category={getCategoryTitle(product.category_id)}
      images={product.images}
      key={product.id}
      price={product.price ?? 1}
      stock={product.stock}
      title={product.title}
      url={`/products/${product.id}`}
    >
      <div className="flex gap-2">
        <QuantityButton variant="secondary" />
        <Button
          className="p-0 h-full aspect-square group"
          onClick={() =>
            showToast(
              "success",
              "Таны сонгосон бүтээгдэхүүн амжилттай хадгалсан цэсэд нэмэгдлээ",
            )
          }
          variant={"secondary"}
        >
          <Heart className="group-hover:fill-brand group-hover:stroke-brand size-5" />
        </Button>
      </div>
    </ProductCard>
  ));
}
