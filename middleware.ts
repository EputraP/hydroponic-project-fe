import { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    // const {pathName} = request.nextUrl;
    // const token = request.cookies.get("token");

    console.log("Middleware executed for request:", request.url);

}