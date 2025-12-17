import { UserRound, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import PasswordInput from '@/components/shared/password-input'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Login() {
  const [openSign, setOpenSign] = useState(false)
  return (
    <Drawer direction="right" onOpenChange={setOpenSign} open={openSign}>
      <DrawerTrigger asChild>
        <div className="flex-col items-center px-4 gap-0.5 hidden sm:flex group cursor-pointer">
          <UserRound className="size-5 duration-150 group-hover:scale-120" />
          <span>Нэвтрэх</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-screen overflow-y-scroll overflow-x-hidden py-4 sm:px-10">
        <Button
          className="absolute top-6 right-6"
          onClick={() => setOpenSign(false)}
          size={'icon'}
          variant={'naked'}
        >
          <X className="stroke-primary size-7" />
        </Button>
        <DrawerTitle className="hidden">Login</DrawerTitle>
        <div className="flex flex-col h-full items-center text-base font-medium">
          <div className="flex flex-col items-center gap-10">
            <Image
              alt="logo"
              className="size-16 object-contain"
              height={64}
              src={'/logo/logo-icon.svg'}
              width={64}
            />
            <h1 className="text-3xl font-bold">Нэвтрэх хэсэг</h1>
          </div>

          {/* Form */}
          <form action={''} className="w-full my-14 space-y-7">
            {/* Email */}
            <div className="space-y-3">
              <Label className="text-base">Имэйл хаяг</Label>
              <Input required type="email" />
            </div>

            <div className="space-y-3">
              {/* Forgot password */}
              <div className="flex items-center justify-between">
                <Label className="text-base">Нууц үг</Label>
                <Link className="text-brand-orange font-semibold" href={'/profile/password_reset'}>
                  Нууц үгээ мартсан уу?
                </Link>
              </div>

              {/* Password */}
              <PasswordInput />
            </div>
            <Button className="w-full text-base" size={'xl'} type="submit" variant={'orange'}>
              Нэвтрэх
            </Button>
          </form>
          <div className="flex flex-col size-full justify-between">
            <div className="flex justify-center gap-4 mt-10">
              <h1>Бүртгүүлээгүй бол ?</h1>
              <Link className="text-brand-orange font-bold" href={'/signup'}>
                Бүртгэл үүсгэх
              </Link>
            </div>
            <div className="flex justify-center gap-4">
              <h1>Хамтран ажиллах</h1>
              <Link className="text-brand-orange font-bold" href={'/signup/company/'}>
                Албан байгууллагаар хүсэлт илгээх
              </Link>
            </div>
            <div className="rounded-lg p-4 lg:p-5 bg-brand-orange/10">
              <Link
                className="justify-between text-brand-orange"
                href={'mailto:contact@khalifa.mn'}
              >
                Албан байгууллагаар бүртгүүлэх бол дээрх хамтран ажиллах дээр даран хүсэлт илгээхээс
                гадна <span className="font-bold">contact@khalifa.mn</span> руу холбогдон
                дэлгэрэнгүй мэдээлэл аваарай
              </Link>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
