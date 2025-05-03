import { auth } from "@/auth";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GraduationCap, Phone, UserCircle2, MapPin, IdCard } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { STUDENT_BY_EMAIL_QUERY } from "@/sanity/lib/queries";

export default async function StudentIDCard() {
  const session = await auth();
  const email = session?.user?.email;
  const student = await client.fetch(STUDENT_BY_EMAIL_QUERY, { email });
  const hasAllInfo = student?.name && student?.route?.name;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-gray-950 text-white rounded-2xl shadow-2xl w-full max-w-sm p-6 border border-white/10 space-y-6 mx-auto text-center">
      {!hasAllInfo ? (
        <div className="mt-4 flex-col justify-center">
        <button className="bg-indigo-700 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition shadow">
          Make your Identity Card Now
        </button>
        <p className="text-gray-500 my-4"> To book buses and track your route you have to make a Identity Card using college StudentId</p>
      </div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-white shadow-lg">
              <Image
                src={urlFor(student?.image).url()}
                alt="Student"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <GraduationCap className="w-8 h-8 text-indigo-500" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-300">Student</h2>
           
            <div className="text-xl font-semibold text-white">{student?.name}</div>
            <div className="text-sm text-gray-400 flex items-center gap-1 justify-center">
              <IdCard className="w-4 h-4" /> {student?.studentId}
            </div>
            <div className="text-sm text-gray-400 flex items-center gap-1 justify-center">
             <span className="text-white">{student?.course} <p>(2022-2026)</p></span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-2">
            {[
              {
                icon: <UserCircle2 className="w-4 h-4 text-indigo-400" />,
                text: student?.email,
              },
              {
                icon: <Phone className="w-4 h-4 text-indigo-400" />,
                text: student?.phone,
              },
              {
                icon: <MapPin className="w-4 h-4 text-indigo-400" />,
                text: `Route: ${student?.route?.name}`,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-center gap-2 text-sm text-gray-300 relative pb-1"
              >
                {item.icon}
                <span>{item.text}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
