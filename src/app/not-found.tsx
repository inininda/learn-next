"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  return (
    <div>
      <h2>Page Not Found {id}</h2>
      <p>Could not find requested resourcce</p>
    </div>
  );
}
