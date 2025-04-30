"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RedirectHandler() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("userRole");

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

  return <p className="text-center mt-10 text-white">Redirecting...</p>;
}
