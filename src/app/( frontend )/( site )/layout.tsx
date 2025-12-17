import React from "react";


export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="md:max-h-screen overflow-hidden">{children}</div>;
}
