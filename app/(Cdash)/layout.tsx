import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Conductor Dashboard",
  description: "Conductor Dashboard",
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      {/* Render any children here if needed */}
      {children}
    </div>
  );
}
