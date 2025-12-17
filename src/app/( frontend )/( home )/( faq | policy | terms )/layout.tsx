import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-primary text-white">
      <div className="container space-y-10">
        {children}
      </div>
    </section>
  );
}
