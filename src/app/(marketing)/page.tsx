import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <ul>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/order-product">Order Product</Link>
        </li>
      </ul>
    </>
  );
}
