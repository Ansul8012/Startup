import { SVGProps } from "react";

interface StudentCardProps {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
}

export default function StudentCard({ icon: Icon, title, description }: StudentCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 transition duration-300 flex flex-col space-y-4">
      <div className="p-3 bg-gray-700 rounded-full w-fit">
        <Icon />
      </div>
      <h2 className="text-xl font-semibold text-white hover:underline">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
