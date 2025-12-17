import { CATEGORIES } from '@/lib/constants'

export function getCategoryTitle(categoryId?: number) {
  const category = CATEGORIES.find((c) => c.id === categoryId)
  return category ? category.title : ''
}
