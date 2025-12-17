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
      <Link className="" href={"/"}>
        <Image
          alt="logo"
          className="h-12 object-contain"
          height={48}
          src={"/logo/logo-dark.svg"}
          width={300}
        />
      </Link>
      <div className="flex flex-col h-full items-center justify-center text-base font-medium">
        {/* Form */}
        <form action={""} className="w-full space-y-5 max-w-md">
          <h1 className="text-3xl mb-10 font-bold text-center">Нэвтрэх</h1>

          {/* Email */}
          <div className="space-y-3">
            <Label className="text-base">Имэйл хаяг</Label>
            <Input required type="email" />
          </div>

          {/* Password */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base">Нууц үг</Label>
              <Link
                className="text-brand-orange font-semibold"
                href={"/profile/password_reset"}
              >
                Нууц үгээ мартсан уу?
              </Link>
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
        <div className="flex justify-center gap-4 mt-10">
          <h1>Бүртгүүлээгүй бол?</h1>
          <Link className="text-brand-orange font-bold" href={"/signup"}>
            Бүртгэл үүсгэх
          </Link>
        </div>
      </div>
    </SignContainer>
  );
}
