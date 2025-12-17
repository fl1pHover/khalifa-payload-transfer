import { StaticImageData } from 'next/image'

export interface SocialItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Hero {
  src: StaticImageData
}

export interface FooterItem {
  label: string
  href: string
}

export interface FeaturedProduct {
  id: number
  title: string
  description?: string
  category?: string
  image: string
  url: string
}

export interface Product {
  id: number
  title: string
  category_id?: number
  category?: string
  description: string
  discountPercentage?: number
  stock: number
  price?: number
  images: Array<string>
  url?: string
}

export interface Category {
  id: number
  title: string
}

export interface FAQ {
  id: number
  question: string
  answer: string[] | React.ReactNode
  type: 'ordered' | 'custom'
}

export interface Bank {
  name: string
  image: string
}

export interface FeaturedBrand {
  id: number
  banner: {
    image: string
    logo: string
  }
  title: string
  description: string
  products: FeaturedProduct[]
}
