import { ReactNode } from "react";
import Sdashboard from "@/app/components/Sdashboard";  // Adjust the import path
interface LayoutProps {
  children: ReactNode;
  params: { username: string };
}

const Page = ({ params }: LayoutProps) => {
  return (
    <>
     <Sdashboard params={params} /></>
  );
};

export default Page;

