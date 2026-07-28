import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href="/products/product-1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/product-2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/product-3">Product 3</Link>
        </li>
        <li>
          <Link href={`/products/product-${productId}`}>Product 100</Link>
        </li>
        <li>
          <Link href={`/products/product-with-searchParam?lang=en`}>
            Product With Search Param
          </Link>
        </li>

        <li>
          <Link href={`/products/product-1?lang=en`}>
            Product One With Search Param
          </Link>
        </li>
      </ul>
    </>
  );
}
