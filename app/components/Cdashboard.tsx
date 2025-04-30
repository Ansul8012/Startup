"use client";

import {
  Bus,
  Users,
  UserCheck,
  Bell,
  History,
  MessageCircle,
} from "lucide-react";
import StudentCard from "@/app/components/ui/StudentCard";
import { useParams } from "next/navigation";

const dashboardItems = [
  {
    title: "Students Booked",
    description: "View all students who have booked your bus route.",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Route Details",
    description: "See your assigned bus route and timing details.",
    icon: Bus,
    color: "text-green-400",
  },
  {
    title: "Assigned Students",
    description: "Check who is traveling with you on this route today.",
    icon: UserCheck,
    color: "text-purple-400",
  },
  {
    title: "Notifications",
    description: "Send notifications to students who have booked the bus.",
    icon: Bell,
    color: "text-red-400",
  },
  {
    title: "Message Students",
    description: "Communicate directly with the students via messages.",
    icon: MessageCircle,
    color: "text-yellow-400",
  },
];

export default function Cdashboard() {
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
          <UserCheck className="w-12 h-12 text-indigo-400" />
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
          “Managing your route, making every trip smooth for students.”
        </p>
        <p className="text-gray-400 text-sm">
          Real-time updates powered by Google Maps for accurate timings.
        </p>
        <div className="mt-2 flex justify-center gap-3 text-xs text-gray-500">
          <span className="bg-gray-800 px-2 py-1 rounded-full">#EfficientTravel</span>
          <span className="bg-gray-800 px-2 py-1 rounded-full">#ConductorLife</span>
          <span className="bg-gray-800 px-2 py-1 rounded-full">#SmartManagement</span>
        </div>
      </div>
    </div>
  );
}
