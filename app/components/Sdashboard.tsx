"use client";

import {
  Bus,
  MapPin,
  UserCheck,
  History,
  Bell,
  GraduationCap,
} from "lucide-react";
import StudentCard from "@/app/components/ui/StudentCard";
import { useParams } from "next/navigation";

const dashboardItems = [
  {
    title: "Book Your Seat",
    description: "Reserve your seat on the college bus for the day.",
    icon: Bus,
    color: "text-blue-400",
  },
  {
    title: "Your Route Info",
    description: "See your current route and bus timing.",
    icon: MapPin,
    color: "text-green-400",
  },
  {
    title: "Assigned Conductor",
    description: "Check who is managing your route today.",
    icon: UserCheck,
    color: "text-purple-400",
  },
  {
    title: "Travel History",
    description: "View your previous bookings and travel logs.",
    icon: History,
    color: "text-yellow-300",
  },
  {
    title: "Notifications",
    description: "Get real-time updates from transport admins.",
    icon: Bell,
    color: "text-red-400",
  },
];

export default function Sdashboard() {
  const params = useParams();
  const username = decodeURIComponent(params.username as string);

  const displayName = username
    .split(/[-_]/)
    .join(" ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen flex flex-col px-6 py-10 bg-black text-white">
      {/* Header section */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="bg-gray-800 p-4 rounded-full mb-4 shadow-lg shadow-indigo-500/20">
          <GraduationCap className="w-12 h-12 text-indigo-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white">
          Welcome, {displayName} 👋
        </h1>
      </div>

      {/* Dashboard grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {dashboardItems.map((item, index) => (
          <StudentCard
            key={index}
            icon={(props) => (
              <item.icon {...props} className={`w-8 h-8 ${item.color}`} />
            )}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* Push footer to bottom */}
      <div className="flex-grow" />

      {/* Footer motto */}
      <div className="text-center text-2xl text-gray-300 italic font-light space-y-2 pb-4">
        <p className="text-lg sm:text-xl font-medium text-white tracking-wide">
          “Know where your bus is — arrive on time, every time.”
        </p>
        <p className="text-gray-400 text-sm">
          Real-time updates powered by Google Maps for your convenience.
        </p>
        <div className="mt-2 flex justify-center gap-3 text-xs text-gray-500">
          <span className="bg-gray-800 px-2 py-1 rounded-full">#SmartTravel</span>
          <span className="bg-gray-800 px-2 py-1 rounded-full">#OnTimeEveryTime</span>
          <span className="bg-gray-800 px-2 py-1 rounded-full">#StudentLife</span>
        </div>
      </div>
    </div>
  );
}
