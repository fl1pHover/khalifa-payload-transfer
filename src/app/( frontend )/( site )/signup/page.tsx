"use client";

import Image from "next/image";
import Link from "next/link";

import SignContainer from "@/components/layout/sign-container";
import PasswordInput from "@/components/shared/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <SignContainer>
      <div className="flex flex-col h-full items-center justify-start text-base font-medium">
        <div className="flex flex-col items-center gap-10 w-full">
          <Link className="w-full" href={"/"}>
            <Image
              alt="logo"
              className="h-12 object-contain"
              height={48}
              src={"/logo/logo-dark.svg"}
              width={300}
            />
          </Link>
        </div>
        {/* Form */}
        <form
          action={""}
          className="w-full space-y-3 md:space-y-5 mt-10 max-w-md"
        >
          {/* Email */}
          <h1 className="text-3xl font-bold text-center">Бүртгэл үүсгэх</h1>

          <div className="space-y-3">
            <Label className="text-base">Имэйл хаяг</Label>
            <Input required type="email" />
          </div>

          {/* Password */}
          <div className="space-y-3">
            <Label className="text-base">Нууц үг</Label>
            <PasswordInput />
          </div>

          {/* Confirm Password */}
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="text-base">Нууц үг давтах</Label>
              <p className="text-red-600 text-xs">
                / Баталгаажуулах зорилгоор өмнө оруулсан нууц үгээ дахин оруулна
                уу /
              </p>
            </div>
            <PasswordInput />
          </div>
          <Button
            className="w-full text-base"
            size={"xl"}
            type="submit"
            variant={"orange"}
          >
            Нэвтрэх
          </Button>
        </form>
        <div className="flex flex-col size-full space-y-10">
          <div className="flex justify-center gap-4 mt-10">
            <h1>Надад бүртгэлтэй хаяг бий.</h1>
            <Link
              className="text-brand-orange font-bold"
              href={"/profile/login"}
            >
              Нэвтрэх
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <h1>Хамтран ажиллах</h1>
            <Link
              className="text-brand-orange font-bold"
              href={"/signup/company/"}
            >
              Албан байгууллагаар хүсэлт илгээх
            </Link>
          </div>
          <div className="rounded-lg p-4 lg:p-5 bg-brand-orange/10">
            <Link
              className="justify-between text-brand-orange"
              href={"mailto:contact@khalifa.mn"}
            >
              Албан байгууллагаар бүртгүүлэх бол дээрх хамтран ажиллах дээр
              даран хүсэлт илгээхээс гадна{" "}
              <span className="font-bold">contact@khalifa.mn</span> руу
              холбогдон дэлгэрэнгүй мэдээлэл аваарай
            </Link>
          </div>
        </div>
      </div>
    </SignContainer>
  );
}
