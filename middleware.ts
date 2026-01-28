import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const {pathname} = request.nextUrl;
    const token = request.cookies.get("token");

    if(!token && pathname !== "/login"){
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!login|_next/static|_next/image|favicon.ico).*)",
  ],
};