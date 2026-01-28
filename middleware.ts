import { NextRequest, NextResponse } from "next/server";

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
    if(!token && pathname !== "/login"){
        return NextResponse.redirect(new URL("/login", request.url));
    }else if(token && pathname === "/login"){
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|\\.well-known).*)",
  ],
};