import { ClipboardMinus, LogOut, User, UserRound } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Login from "./login";

export default function ProfileDropDown({ login }: { login: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {login ? (
          <Link
            className="flex-col items-center px-4 gap-0.5 hidden sm:flex group"
            href={"/profile"}
          >
            <UserRound className="size-5 duration-150 group-hover:scale-120" />
            <span>Бүртгэл</span>
          </Link>
        ) : (
          <Login />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="min-w-48 text-white font-bold"
      >
        <DropdownMenuLabel>Орсон бүртгэл</DropdownMenuLabel>
        <DropdownMenuItem className="pointer-events-none">
          soko.bbz.4@gmail.com
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuGroup>
          <Link className="group" href={"/account/profile"}>
            <DropdownMenuItem>
              <User className="text-white group-hover:scale-110 transition" />{" "}
              Хувийн мэдээлэл
            </DropdownMenuItem>
          </Link>
          <Link className="group" href={"/account/orders"}>
            <DropdownMenuItem>
              <ClipboardMinus className="text-white group-hover:scale-110 transition" />{" "}
              Захиалгын мэдээлэл
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem className="focus:bg-red-500 group">
          <LogOut className="text-white group-hover:scale-110 transition" />
          Системээс гарах
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
