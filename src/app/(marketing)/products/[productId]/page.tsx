import Link from "next/link";

export default async function ProductDetail({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const id = (await params).productId;
  const lang = (await searchParams)?.lang;

  return (
    <>
      <Link href="/products">Products</Link>
      <h1>
        Product Detail More than 3 {id} {lang}
      </h1>
      <br />
      <ul>
        <li>
          <Link href="/products/id?lang=en">English</Link>
        </li>
        <li>
          <Link href="/products/id?lang=es">Spanish</Link>
        </li>
        <li>
          <Link href="/products/id?lang=fr">French</Link>
        </li>
      </ul>
    </>
  );
}
