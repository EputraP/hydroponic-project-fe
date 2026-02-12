import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/register"];

export function middleware(request:NextRequest){
    const {pathname} = request.nextUrl;
    const token = request.cookies.get("refresh-token")?.value;

    console.log({pathname, token});
    if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/assets")
    ) {
        return NextResponse.next();
    }

    const isPublicPath = PUBLIC_PATHS.some(path => pathname.startsWith(path));

    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (token && pathname === "/login") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|\\.well-known).*)",
  ],
};