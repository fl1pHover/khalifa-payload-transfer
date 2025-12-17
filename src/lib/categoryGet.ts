import { Category } from "@/types";
import { delay } from "./use-timeout";

export async function getCategory() {
  await delay(1000);
  return [
    { id: 1, title: "gift set" },
    { id: 2, title: "gin" },
    { id: 3, title: "rum" },
    { id: 4, title: "liqueur" },
    { id: 5, title: "whiskey" },
    { id: 6, title: "champagne" },
    { id: 7, title: "tequila" },
  ] as Category[];
}
