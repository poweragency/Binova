import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all routes except _next, _vercel, /api, and files (e.g. /icon.png)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
