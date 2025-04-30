"use client";

import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const username = decodeURIComponent(params.username as string);

  return (
    <div className="text-whit p-10">
      Welcome {username.split(/[-_]/).join(" ").replace(/\b\w/g, l => l.toUpperCase())}
      <span>COnductor</span>
    </div>
  );
};

export default Page;
