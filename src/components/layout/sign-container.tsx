import React from "react";

export default function SignContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen">
      <div className="max-w-xl w-full p-6 sm:px-10 mx-auto flex flex-col h-full">
        {children}
      </div>
      <div className="size-full bg-accent hidden lg:block"></div>
    </section>
  );
}
