import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import CategoryGrid from '@/components/pages/product/category-grid'
import PageLoader from '@/components/shared/page-loader'
import Suggestion from '@/components/shared/suggestion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getCategory } from '@/lib/categoryGet'
import { CATEGORIES } from '@/lib/constants'
import { getProducts } from '@/lib/productGet'

import ProductGrid from '../../../../components/pages/product/product-grid'

export default async function Page() {
  const products = await getProducts()
  const categories = await getCategory()

  return (
    <Suspense fallback={<PageLoader dark={true} />}>
      <section className="relative">
        <div className="sticky-bottom-nav">
          <div className="flex w-full justify-between md:hidden px-5 py-3 bg-dark text-white font-bold text-xl">
            <h1>Ангилал:</h1>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1 text-brand">
                  Gift Set
                  <ChevronDown className="size-5" strokeWidth={3} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="mt-3">
                {CATEGORIES.map((c) => {
                  return (
                    <DropdownMenuItem className="group flex-center" key={c.id}>
                      <div className="capitalize py-2 font-bold text-xl group-hover:text-brand transition text-nowrap leading-none">
                        {c.title}
                      </div>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:flex items-center justify-center bg-dark text-white gap-x-4 flex-wrap w-full hidden">
            <Link
              className="px-8 py-4 capitalize font-bold text-xl hover:text-brand transition"
              href={'#'}
            >
              All spirits
            </Link>
            <CategoryGrid categories={categories} />
          </div>
        </div>
        <div>
          <div className="relative w-full h-full">
            <Image
              alt="Rum"
              className="relative overflow-hidden h-[148px] w-full md:h-[248px] transition-all object-cover object-center"
              height={600}
              src="/banner/banner-1.png"
              width={1200}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-6xl font-semibold">
              Rum
            </div>
          </div>
          <div className="bg-primary text-white">
            <div className="container">
              <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 gap-y-20 md:grid-cols-3 lg:gap-x-7 xl:grid-cols-4">
                <Suspense
                  fallback={Array.from({ length: 4 }).map((_, i) => (
                    <div
                      className="animate-pulse rounded-md bg-gray-400 aspect-3/4 w-full"
                      key={i}
                    ></div>
                  ))}
                >
                  <ProductGrid products={products} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suggestion />
    </Suspense>
  )
}
