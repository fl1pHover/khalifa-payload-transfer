'use server'

import { Handbag, Heart, LogOut, TextAlignJustify, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import LangSwitch from '../shared/lang-switch'
import { Button } from '../ui/button'
import { NavCountItem } from './nav-product-count'

interface SignInButtonProps {
  openCart: boolean
  openNav: boolean
  setOpenCart: (open: boolean) => void
  setOpenNav: (open: boolean) => void
}

export async function SignInButton({
  openCart,
  openNav,
  setOpenCart,
  setOpenNav,
}: SignInButtonProps) {
  function handleOpenCart() {
    setOpenCart(true)
    setOpenNav(false)
  }
  return (
    <Drawer direction="right" onOpenChange={setOpenNav} open={openNav}>
      <DrawerTrigger asChild className="block xl:hidden">
        <Button className="flex flex-col items-center px-4 gap-0.5">
          <TextAlignJustify className="size-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex items-center justify-between">
          <DrawerHeader className="flex flex-row w-full justify-between p-0 py-6">
            <DrawerTitle>
              <Image
                alt="logo"
                className="object-contain h-9 object-left"
                height={50}
                src={'/logo/logo-dark.svg'}
                width={200}
              />
            </DrawerTitle>
            <Button onClick={() => setOpenNav(false)} size={'icon'} variant={'naked'}>
              <X className="stroke-primary size-7" />
            </Button>
          </DrawerHeader>
        </div>

        <div className="flex flex-col justify-start font-bold text-2xl">
          <div className="flex flex-col py-10">
            {/*{NAV_ITEMS.map((item, i) => (
              <Link className="py-2" href={item.href} key={i} onClick={() => setOpenNav(false)}>
                {item.label}
              </Link>
            ))}*/}
          </div>

          {/* Menu mobile actions */}
          <div className="border-t border-brand-orange space-y-6 py-10">
            <Link
              className="flex items-center justify-between"
              href={'/bookmark'}
              onClick={() => setOpenNav(false)}
            >
              <NavCountItem icon={<Heart className="size-6" />} isMobile label="Хадгалсан" />
            </Link>

            {/* Cart handle on mobile */}
            <Drawer direction="right" onOpenChange={setOpenCart} open={openCart}>
              <DrawerTrigger asChild onClick={handleOpenCart}>
                <Button
                  className="flex items-center justify-between w-full px-0 font-bold"
                  variant={'naked'}
                >
                  <NavCountItem icon={<Handbag className="size-6" />} isMobile label="Сагс" />
                </Button>
              </DrawerTrigger>
            </Drawer>

            <Link
              className="flex items-center justify-between"
              href={'/account/profile'}
              onClick={() => setOpenNav(false)}
            >
              <span className="flex items-center gap-2">
                <User className="size-6" />
                <span>Бүртгэл</span>
              </span>
            </Link>
            <Link
              className="flex items-center justify-between"
              href={'/account/profile'}
              onClick={() => setOpenNav(false)}
            >
              <span className="flex items-center gap-2">
                <LogOut className="size-6" />
                <span>Системээс гарах</span>
              </span>
            </Link>
          </div>
        </div>
        <DrawerFooter>
          <div className="flex justify-between">
            <LangSwitch />
            <div className="flex items-center gap-2">
              {/*{SOCIALS.map((s, i) => {
                const Icon = s.icon
                return (
                  <Link href={s.href} key={i} rel="noopener noreferrer" target="_blank">
                    <Icon className="fill-current size-5" />
                  </Link>
                )
              })}*/}
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
