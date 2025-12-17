import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'file:text-foreground font-semibold shadow-xs placeholder:text-muted-foreground selection:bg-brand-orange selection:text-primary-foreground dark:bg-input/30 border-white/10 h-10 w-full min-w-0 rounded-md border bg-input px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-brand-orange focus-visible:ring-brand-orange/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default: 'bg-white border-input/15',
        orange: 'bg-brand-orange text-primary-foreground hover:bg-primary/90',
        dark: 'bg-input border-white/15',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 md:h-12 text-base font-medium',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

function Input({
  variant,
  size,
  className,
  type,
  ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
