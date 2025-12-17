"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SelectSize({ size }: { size: Array<number> }) {
  const [activeSize, setActiveSize] = useState<number>(0);

  return (
    <>
      {/* TODO: Size */}
      {size.map((s, i) => {
        return (
          <Button
            className={cn(
              activeSize === i && "border border-brand-orange",
              "font-bold"
            )}
            key={i}
            onClick={() => setActiveSize(i)}
            size={"lg"}
            variant={"outline"}
          >
            {s}L
          </Button>
        );
      })}
    </>
  );
}
