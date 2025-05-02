import Cdashboard from "@/app/components/Cdashboard";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
  params: { username: string };
}

const Page = ({ params }: LayoutProps) => {
  return (
    <>
     <Cdashboard params={params} /></>
  );
};

export default Page;
