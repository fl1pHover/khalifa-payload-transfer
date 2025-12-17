import Link from 'next/link'

import { getCategoryTitle } from '@/lib/func'
import { randomSuggestion } from '@/lib/productGet'

import ProductCard from '../features/product-card'
import { Button } from '../ui/button'

export default async function Suggestion() {
  const products = await randomSuggestion()

  return (
    <div className="container text-primary! justify flex flex-col">
      <h1 className="text-3xl md:text-6xl uppercase font-bold text-center mb-14 md:mb-20 font-serif text-inherit">
        SHOP OUR SPIRITS
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-2k h-fit text-inherit gap-10">
        {products.map((product) => {
          return (
            <ProductCard
              category={getCategoryTitle(product.category_id)}
              images={product.images}
              key={product.id}
              price={product.price ?? 0}
              shadow="light"
              stock={product.stock}
              title={product.title}
              url={`/products/${product.id}`}
            />
          )
        })}
      </div>
      <div className="flex justify-center w-full mt-16">
        <Link href="/products">
          <Button className="font-bold" size={'xl'} variant={'orange'}>
            Бүх бүтээгдэхүүн харах
          </Button>
        </Link>
      </div>
    </div>
  )
}
