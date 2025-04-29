// app/(main)/layout.tsx

import React from 'react'
import Navbar from '../components/Navbar'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <footer>My Footer</footer>
    </div>
  )
}
