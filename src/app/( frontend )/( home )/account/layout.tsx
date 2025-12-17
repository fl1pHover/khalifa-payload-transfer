"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/account/profile", name: "Хувийн мэдээлэл" },
  { href: "/account/orders", name: "Захиалгын мэдээлэл" },
];

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section className="relative">
      <div className="bg-dark text-white sticky-bottom-nav">
        <div className="flex gap-3 w-full max-w-2k mx-auto px-5 overflow-x-auto overflow-y-visible lg:px-10 leading-6 lg:text-xl lg:leading-6 font-bold sticky top-0">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href || (tab.href !== "/profile" && pathname.startsWith(tab.href));

            return (
              <Link className={cn("relative px-2 py-3 lg:px-5 whitespace-nowrap text-brand hover:text-brand transition-all border-b-2 border-black", isActive ? "text-brand border-brand" : "text-white")} href={tab.href} key={tab.href}>
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="text-white bg-primary">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}
