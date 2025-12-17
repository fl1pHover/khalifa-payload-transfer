import Link from "next/link";

import { Category } from "@/types";

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <>
      {categories.map((c) => (
        <Link
          className="px-8 py-3 capitalize font-bold lg:text-xl hover:text-brand transition text-nowrap leading-none"
          href={"#"}
          key={c.id}
        >
          {c.title}
        </Link>
      ))}
    </>
  );
}
