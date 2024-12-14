// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log("In Middleware")
  const token = request.cookies.get('authToken'); // Replace with your auth token name

  // If there is no token, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow the request if token exists
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Define routes to protect, e.g., any route under /protected
};
