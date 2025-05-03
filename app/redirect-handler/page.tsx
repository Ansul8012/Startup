"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from '@/app/components/Loader';

export default function RedirectHandler() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("userRole");

    if (!role) {
      // If no role is found, redirect to a default page or show an error message
      router.replace('/error');  // Or any fallback page
      return;
    }

    if (session && role) {
      const name = session.user?.name || session.user?.email?.split("@")[0] || "user";
      const routeName = name.toLowerCase().replace(/\s+/g, "");
      if (role === "student") {
        router.replace(`/studentDashboard/${routeName}`);
      } else {
        router.replace(`/conductorDashboard/${routeName}`);
      }
    }
  }, [session, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <Loader />
      <p className="mt-4 text-xl font-semibold">Redirecting...</p>
    </div>
  );
}
