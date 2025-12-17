"use client";

import { Handbag, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function QuantityButton({
  variant,
}: {
  variant: "ghost" | "secondary";
}) {
  const [quantity, setQuantity] = useState(0);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(0);
    }
  }

  return (
    <>
      {quantity === 0 ? (
        <Button
          className="sm:text-xl font-bold flex items-center gap-2 h-11"
          onClick={() => setQuantity(quantity + 1)}
          size={"lg"}
          variant={variant}
        >
          <Handbag className="size-5" strokeWidth={2} />
          <span>Сагслах</span>
        </Button>
      ) : (
        <div className="flex items-center gap-2 border px-1 rounded-lg bg-white">
          <Button
            className="text-primary"
            onClick={() => setQuantity(quantity - 1)}
            size={"icon-sm"}
            variant={"ghost"}
          >
            <Minus />
          </Button>
          <Input
            className="bg-white text-primary border-0 ring-0 shadow-none w-14 text-center text-xl! font-bold"
            onChange={handleInputChange}
            value={quantity}
          />
          <Button
            onClick={() => setQuantity(quantity + 1)}
            size={"icon-sm"}
            variant={"ghost"}
          >
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
}
