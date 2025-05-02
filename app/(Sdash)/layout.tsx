import { ReactNode } from "react";
import Sdashboard from "@/app/components/Sdashboard";  // Adjust the import path
import type { Metadata } from "next";
interface LayoutProps {
  children: ReactNode;
  params: { username: string };
}

export const metadata:Metadata = {
  title: "Student Dashboard",
  description: "Student Dashboard",
};

export default function Layout({ children, params }: LayoutProps) {
  return (
    <div>
      {/* Pass the username dynamically to Sdashboard */}
      <Sdashboard params={params} />
      {/* Render any children here if needed */}
      {children}
    </div>
  );
}
