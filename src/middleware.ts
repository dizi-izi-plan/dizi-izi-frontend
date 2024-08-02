import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from '@/helpers/common-constants/routes-constants';

const protectedRoutes: string[] = [routes.personalAccount];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
