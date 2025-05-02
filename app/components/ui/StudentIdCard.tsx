import { auth } from "@/auth"; // adjust path if needed
import Image from "next/image";
import { GraduationCap } from "lucide-react";

export default async function StudentIDCard() {
  const session = await auth();

  const student = {
    name: session?.user?.name || "Unknown Name",
    image: session?.user?.image || "/placeholder.png",
    studentid:220211314,
    course: 'Btech',
    batch: '2022-2026',
    route: 'Kargi chowk',
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/20 rounded-xl w-full max-w-sm p-6 shadow-lg hover:shadow-indigo-500/20 transition-shadow">
      {student.route && student.batch ? (
        <div className="flex flex-col items-center gap-4">
          <GraduationCap className="w-10 h-10 text-indigo-400" />
          <div className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">
            Student
          </div>
          <div className="text-xl font-bold text-white">Startup</div>
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white">
            <Image
              src={student.image}
              alt="Student Profile"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <div className="text-lg font-semibold text-white">{student.name}</div>
          <div className="text-sm text-gray-200">{student.studentid}</div>
          <div className="text-sm text-gray-400">{student.course}</div>
          <div className="text-sm text-gray-400">{student.batch}</div>
          <div className="text-sm text-gray-400">{student.route}</div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <GraduationCap className="w-10 h-10 text-indigo-400" />
          <div className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">
            Student
          </div>
          <div className="text-xl font-bold text-white">Startup</div>
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white">
            <Image
              src={student.image}
              alt="Student Profile"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <div className="text-lg font-semibold text-white">{student.name}</div>
          <button className="mt-4 bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">
            Register Yourself
          </button>
        </div>
      )}
    </div>
  );
}
