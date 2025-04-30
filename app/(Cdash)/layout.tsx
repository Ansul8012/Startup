import { ReactNode } from "react";
import Cdashboard from "@/app/components/Cdashboard";  // Adjust the import path
import Head from "next/head"; 
interface LayoutProps {
  children: ReactNode;
  params: { username: string };
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <div>
      {/* Pass the username dynamically to Cdashboard */}
      <Head>
        <title>Conductor Dashboard - {params.username}</title>
        <meta
          name="description"
          content="Conductor's dashboard for managing routes, students, and notifications in real-time."
        />
      </Head>
      <Cdashboard params={params} />
      {/* Render any children here if needed */}
      {children}
    </div>
  );
}
