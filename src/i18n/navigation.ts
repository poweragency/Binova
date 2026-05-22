import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware wrappers for Next.js Link/redirect/router/usePathname
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
