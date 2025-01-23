// /middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const user = req.cookies.get('next-auth.session-token');

  if (!user && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  if (pathname.startsWith('/dashboard/admin') && user.role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard/user', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
