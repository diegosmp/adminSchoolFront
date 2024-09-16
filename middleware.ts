import { NextRequest, NextResponse } from 'next/server'
import { getCookieServer } from './libs/cookieServer'
import { isValidateToken } from './libs/isValidateToken'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/_next') || pathname === '/') {
    return NextResponse.next()
  }

  const token = getCookieServer()

  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    const isValidate = await isValidateToken(token)

    if (!isValidate) {
      return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
  }
}
