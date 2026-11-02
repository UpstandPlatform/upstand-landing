import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, Locale } from "./i18n/config";

const PUBLIC_FILE_EXTENSIONS = /\.(.*)$/;

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, next internal routes, and SEO/GEO files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/site.webmanifest" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/llms.txt" ||
    pathname === "/llms-full.txt" ||
    PUBLIC_FILE_EXTENSIONS.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect user's preferred locale from cookie or Accept-Language header
  let targetLocale: Locale = defaultLocale;
  const cookieLocale = request.cookies.get("UPSTAND_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    targetLocale = cookieLocale as any;
  } else {
    const acceptLanguage = request.headers.get("accept-language") || "";
    for (const locale of locales) {
      if (acceptLanguage.toLowerCase().includes(locale)) {
        targetLocale = locale;
        break;
      }
    }
  }

  const redirectUrl = new URL(`/${targetLocale}${pathname}`, request.url);
  redirectUrl.search = request.nextUrl.search;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
