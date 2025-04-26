import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware running for:", request.nextUrl.pathname);
  const authToken = request.cookies.get("auth-token")?.value;
  console.log("Auth token:", authToken);

  const isAuthenticated = authToken === "authenticated";

  if (isAuthenticated && request.nextUrl.pathname.startsWith("/login")) {
    console.log("Redirecting to home (already authenticated)");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isAuthenticated && !request.nextUrl.pathname.startsWith("/login")) {
    console.log("Redirecting to login (not authenticated)");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
