import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { privateRoutes } from "./routes";

// 1. Wrapped middleware using NextAuth config
const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const {nextUrl} = req;
  const url='http://localhost:3000';
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);

  if (isPrivateRoute && !isLoggedIn) {
    return Response.redirect(`${url}/prompt`);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};