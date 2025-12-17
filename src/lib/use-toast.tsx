'use client'

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

type ToastVariant = 'default' | 'success' | 'info' | 'warning' | 'error'

export function showToast(variant: ToastVariant, description?: React.ReactNode) {
  const base = {
    description,
  }

  switch (variant) {
    case 'success':
      return toast.success('Амжилттай', {
        ...base,
        icon: <CircleCheckIcon className="fill-green-500 text-white" />,
      })

    case 'info':
      return toast.info('Мэдээлэл', {
        ...base,
        icon: <InfoIcon className="fill-primary text-white" />,
      })

    case 'warning':
      return toast.warning('Анхаар!', {
        ...base,
        icon: <TriangleAlertIcon className="fill-yellow-500 text-white" />,
      })

    case 'error':
      return toast.error('Алдаа!', {
        ...base,
        icon: <OctagonXIcon className="fill-red-500 text-white" />,
      })

    default:
      return toast('Мэдэгдэл', {
        ...base,
        icon: <Loader2Icon />,
      })
  }
}
