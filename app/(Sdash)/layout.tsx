import { ReactNode } from "react";
import type { Metadata } from "next";
interface LayoutProps {
  children: ReactNode;
  params: { username: string };
}

export const metadata:Metadata = {
  title: "Student Dashboard",
  description: "Student Dashboard",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
