import React from 'react';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <h1>Hey Bro, lets authenticate</h1>
      {user ? (
        <p>Welcome, {user.name}</p>
      ) : (
       redirect("/signIn")
      )}

     {user ? (
        <p>welcome bro</p>
     ):
     (
        <p>sign in kar</p>
     )}
    </>
  );
}

export default Page;
