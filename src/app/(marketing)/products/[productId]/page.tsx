import Link from "next/link";
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const id = (await params).productId;

  return (
    <>
    <Link href="/products">Products</Link>
      <h1>Product Detail More than 3 {id}</h1>
    </>
  );
}
