import PasswordInput from "@/components/shared/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col gap-x-8 gap-y-14 md:grid grid-cols-3">
      <div>
        <h1 className="text-2xl lg:text-4xl mb-4 lg:mb-7 font-semibold leading-7 text-white">
          Хувийн мэдээлэл
        </h1>
        <p className="text-gray-400 text-sm">
          Энд оруулсан мэдээллээр хүргэлт хийгдэх тул үнэн зөв бөглөнө үү!{" "}
        </p>
      </div>
      <div className="col-span-2">
        <form action={""} className="grid lg:grid-cols-2 gap-y-8 gap-6">
          <div className="space-y-3">
            <Label htmlFor="email">Хэрэглэгчийн цахим шуудан</Label>
            <Input
              className="cursor-not-allowed"
              disabled
              id="email"
              required
              type="email"
              value={"soko.bbz.4@gmail.com"}
              variant={"dark"}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="tax-number">Утасны дугаар</Label>
            <Input id="tax-number" required type="text" variant={"dark"} />
          </div>
          <div className="space-y-3">
            <Label htmlFor="name">Нэр</Label>
            <Input id="name" required type="text" variant={"dark"} />
          </div>
          <div className="space-y-3">
            <Label htmlFor="tax-number">Татвар төлөгчийн дугаар</Label>
            <Input id="tax-number" required type="text" variant={"dark"} />
          </div>
          <div className="col-span-full space-y-3">
            <Label htmlFor="address">Хаяг </Label>
            <Input id="address" required type="text" variant={"dark"} />
          </div>
          <div>
            <Button type="submit" variant={"orange"}>
              Хадгалах
            </Button>
          </div>
        </form>
      </div>

      <Separator className="col-span-full" />

      <div>
        <h1 className="text-2xl lg:text-4xl mb-4 lg:mb-7 font-semibold leading-7 text-white">
          Нууц үг солих{" "}
        </h1>
        <p className="text-gray-400 text-sm">
          Аюулгүй байдлаа хангаж, нууц үгээ шинэчилнэ үү.
        </p>
      </div>
      <div className="col-span-2">
        <form className="grid gap-y-8 gap-6">
          <div className="space-y-3">
            <Label htmlFor="old-password">Хуучин нууц үг</Label>
            {/* <Input

            /> */}
            <PasswordInput
              className="bg-amber-100 text-black"
              id="old-password"
              required
              type="password"
              variant={"dark"}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="new-password">Шинэ нууц үг </Label>
            <Input
              id="new-password"
              required
              type="password"
              variant={"dark"}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="new-password-again">Шинэ нууц үг давтах</Label>
            <Input
              id="new-password-again"
              required
              type="password"
              variant={"dark"}
            />
          </div>
          <div>
            <Button type="submit" variant={"orange"}>
              Хадгалах
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
