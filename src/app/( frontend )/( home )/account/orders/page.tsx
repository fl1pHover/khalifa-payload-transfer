const orders = [];

export default function Page() {
  return (
    <div className="flex flex-col gap-x-8 gap-y-4 md:grid grid-cols-3">
      <div>
        <h1 className="text-2xl lg:text-4xl mb-4 lg:mb-7 font-semibold leading-7 text-white">Миний захиалга</h1>
      </div>
      <div className="col-span-2 min-h-[20vh]">{orders.length === 0 ? <div>Захиалга байхгүй байна</div> : <div>Захиалга</div>}</div>
    </div>
  );
}
