import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// import { FOOTER_ITEMS, NAV_ITEMS, SOCIALS } from '@/constants'
import { FOOTER_ITEMS, NAV_ITEMS, SOCIALS } from '@/lib/constants'

import { Separator } from '../ui/separator'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-2k w-full mx-auto py-7 md:py-8 px-5 lg:px-10 gap-8 flex flex-col">
        <Separator />
        <div className="flex items-center justify-between">
          <Image
            alt="Khalifa logo"
            className="h-12 object-contain"
            height={100}
            src={'/logo/logo-white.svg'}
            width={200}
          />
          <div className="flex items-center gap-3 lg:hidden">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon
              return (
                <Link href={social.href} key={i} rel="noopener noreferrer" target="_blank">
                  <Icon className="fill-current size-5" />
                </Link>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-7 text-sm lg:text-base font-semibold font-manrope gap-y-6">
          <div className="col-span-full md:col-span-2 flex flex-col">
            <Link className="flex items-center gap-2 group py-2.5" href={'tel:+97675990007'}>
              <Phone className="size-5" />
              <span className="text-white/60 group-hover-float">+976 7599-0007</span>
            </Link>
            <Link
              className="flex items-center gap-2 group py-0.5"
              href={'mailto:contact@khalifa.mn'}
            >
              <Mail className="size-5" />
              <span className="text-white/60 group-hover-float">contact@khalifa.mn</span>
            </Link>
          </div>
          <div className="col-span-2 flex flex-col text-nowrap text-white/60">
            {NAV_ITEMS.map((item, i) => {
              return (
                <Link
                  className="text-inherit hover:text-white hover-float py-2.5"
                  href={item.href}
                  key={i}
                >
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
          <div className="col-span-2 flex flex-col mt-auto text-white/60">
            {FOOTER_ITEMS.map((item, i) => {
              return (
                <Link
                  className="text-inherit hover:text-white hover-float py-2.5"
                  href={item.href}
                  key={i}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          <div className="col-span-1 lg:flex flex-col hidden">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon
              return (
                <Link
                  className="flex items-center gap-2 group py-2.5"
                  href={social.href}
                  key={i}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="fill-current size-5" />
                  <span className="group-hover-float">{social.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
        <Separator />

        <p className="font-medium text-sm text-center sm:text-left text-white">
          © 2025 Khalifa LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
