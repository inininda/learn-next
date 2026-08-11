import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    //return NextResponse.redirect(new URL("/hello", request.url))
    //if (request.nextUrl.pathname === '/profile') {
    //return NextResponse.redirect(new URL("/hello", request.nextUrl))


    // if you dont want to redirect, you can use rewrite
    // so the request path will stay /profile but the content is from /hello
    // return NextResponse.rewrite(new URL("/hello", request.nextUrl))

    //}

    const response = NextResponse.next()

    // to work with cookies
    const themePreference = request.cookies.get("theme")
    if (!themePreference) {
        response.cookies.set("theme", "dark")
    }

    // to modified response header
    response.headers.set("custom-header", "custom value")

    return response

}

/*export const config = {
    matcher: "/profile"
}*/