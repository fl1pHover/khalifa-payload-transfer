"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "../ui/input";

export default function PasswordInput({ ...props }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative h-fit">
      <Input
        className={props.className}
        required
        type={show ? "text" : "password"}
        {...props}
      />
      <div
        className="absolute top-[50%] -translate-y-[50%] right-2 p-2 cursor-pointer bg-transparent transition rounded-md hover:bg-accent"
        onClick={() => setShow(!show)}
      >
        {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </div>
    </div>
  );
}
