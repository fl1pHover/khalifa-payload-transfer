'use client'

import { Handbag, Heart, LogOut, TextAlignJustify, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { NAV_ITEMS, SOCIALS } from '@/lib/constants'
import useHydration from '@/lib/use-hydration'
import { cn } from '@/lib/utils'

import Logo from '../../../public/logo/logo-white.svg'
import { NavCountItem } from '../features/nav-product-count'
import ProfileDropDown from '../features/profile-dropdown'
import Cart from '../pages/cart/cart'
import LangSwitch from '../shared/lang-switch'
import { Button } from '../ui/button'

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  function handleOpenCart() {
    setOpenCart(true)
    setOpenNav(false)
  }

  const isHydrated = useHydration()

  const pathname = usePathname()

  return (
    <nav className="sticky inset-x-0 top-0 z-30 text-white">
      {isHydrated && (
        <div className="bg-primary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-2k p-5 lg:py-5 lg:px-10">
            <Link href={'/'}>
              <Image
                alt="Khalifa logo"
                className="h-8 md:h-12 w-auto object-contain"
                height={500}
                src={Logo}
                width={500}
              />
            </Link>
            <div className="hidden justify-between items-center w-full xl:flex xl:w-auto">
              <ul className="flex font-semibold justify-center items-center">
                {NAV_ITEMS.map((item, i) => (
                  <li key={i}>
                    <Link
                      className="flex flex-col items-center transition-colors ease-in-out duration hover:text-brand px-4"
                      href={item.href}
                    >
                      <span className="text-center">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center text-sm font-semibold">
              <div className="hidden lg:flex items-center">
                <LangSwitch />
                <Link
                  className="flex-col items-center px-4 gap-0.5 hidden sm:flex group"
                  href={'/bookmark'}
                >
                  <NavCountItem
                    icon={<Heart className="size-5 duration-150 group-hover:scale-120" />}
                    label="Хадгалсан"
                  />
                </Link>
              </div>

              {/* Cart drawer */}
              <Cart openCart={openCart} setOpenCart={setOpenCart} />

              {/* Profile DropwDown */}
              <div className="items-center hidden lg:flex">
                <ProfileDropDown login={false} />
                <ProfileDropDown login={true} />
              </div>

              {/* Login button*/}
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
                      {NAV_ITEMS.map((item, i) => (
                        <Link
                          className="py-2"
                          href={item.href}
                          key={i}
                          onClick={() => setOpenNav(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {/* Menu mobile actions */}
                    <div className="border-t border-brand-orange space-y-6 py-10">
                      <Link
                        className="flex items-center justify-between"
                        href={'/bookmark'}
                        onClick={() => setOpenNav(false)}
                      >
                        <NavCountItem
                          icon={<Heart className="size-6" />}
                          isMobile
                          label="Хадгалсан"
                        />
                      </Link>

                      {/* Cart handle on mobile */}
                      <Drawer direction="right" onOpenChange={setOpenCart} open={openCart}>
                        <DrawerTrigger asChild onClick={handleOpenCart}>
                          <Button
                            className="flex items-center justify-between w-full px-0 font-bold"
                            variant={'naked'}
                          >
                            <NavCountItem
                              icon={<Handbag className="size-6" />}
                              isMobile
                              label="Сагс"
                            />
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
                        {SOCIALS.map((s, i) => {
                          const Icon = s.icon
                          return (
                            <Link href={s.href} key={i} rel="noopener noreferrer" target="_blank">
                              <Icon className="fill-current size-5" />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              {/*<SignInButton
                setOpenCart={setOpenCart}
                openCart={openCart}
                setOpenNav={setOpenNav}
                openNav={openNav}
              />*/}
            </div>
          </div>
        </div>
      )}
      <div
        className={cn(
          pathname === '/' || pathname === '/about'
            ? 'flex-center bg-black gap-3 font-semibold py-2'
            : 'hidden',
        )}
      >
        <span
          className={
            'size-7 rounded-full flex-center border border-white text-xs leading-none font-bold'
          }
        >
          21+
        </span>
        <p className="text-xs md:text-sm lg:text-base">
          Хэтрүүлэн хэрэглэх нь таны эрүүл мэндэд хортой
        </p>
      </div>
    </nav>
  )
}
