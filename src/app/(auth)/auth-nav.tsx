"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthNav() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive =
          link.href === pathname ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "text-red-500 mr-4" : "mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
