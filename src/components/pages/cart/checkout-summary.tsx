import { Separator } from "@/components/ui/separator";

interface CheckoutSummaryProps {
  action?: React.ReactNode;
  deliveryPrice?: number;
  totalPrice: number;
}

export default function CheckoutSummary({
  action,
  deliveryPrice = 0,
  totalPrice = 5000,
}: CheckoutSummaryProps) {
  const delivery: number = 0;
  return (
    <div className="my-10 rounded-lg bg-primary/5 px-6 py-5 text-primary font-bold space-y-8">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="opacity-60">Үнийн дүн</h1>
          <h1 className="text-xl">{totalPrice.toLocaleString()} ₮</h1>
        </div>
        <Separator className="bg-border" />
        <div className="flex justify-between items-center">
          <h1 className="opacity-60">Хүргэлт</h1>
          <h1 className="text-xl">
            {deliveryPrice === 0 || deliveryPrice === undefined
              ? "Үнэгүй"
              : deliveryPrice + "₮"}
          </h1>
        </div>
        <Separator className="bg-border" />
        <div className="flex justify-between items-center text-brand-orange">
          <h1>Нийт дүн</h1>
          <h1 className="text-xl">{(50000 + delivery).toLocaleString()}₮</h1>
        </div>
      </div>
      {action}
    </div>
  );
}
