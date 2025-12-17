"use client";

import Image from "next/image";
import Link from "next/link";

import SignContainer from "@/components/layout/sign-container";
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
          <h1 className="text-3xl mb-10 font-bold text-center">
            Албан байгууллагын хүсэлт илгээх
          </h1>
          {/* Company name */}
          <div className="space-y-3">
            <Label className="text-base">Байгууллагын нэр</Label>
            <Input required type="text" />
          </div>

          {/* Phone */}
          <div className="space-y-3">
            <Label className="text-base"> Холбоо барих утас </Label>
            <Input required type="text" />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <Label className="text-base">Холбоо барих имайл хаяг</Label>
            <Input required type="email" />
          </div>
          <Button
            className="w-full text-base"
            size={"xl"}
            type="submit"
            variant={"orange"}
          >
            Хүсэлт илгээх
          </Button>
        </form>
        <div className="flex justify-center gap-4 mt-10">
          <h1>Надад бүртгэлтэй хаяг бий.</h1>
          <Link className="text-brand-orange font-bold" href={"/profile/login"}>
            Нэвтрэх
          </Link>
        </div>
      </div>
    </SignContainer>
  );
}
