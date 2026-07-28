"use client";
import { use } from "react";

import Link from "next/link";
export default function ProductOne({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { productId } = use(params);
  const { lang } = use(searchParams);

  return (
    <>
      <Link href="/products">
        Products {productId} {lang ? lang : ""}
      </Link>
      <h1>Product One</h1>
    </>
  );
}
