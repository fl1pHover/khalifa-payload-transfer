import React from 'react'

import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
