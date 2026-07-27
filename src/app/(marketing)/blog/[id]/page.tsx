import { notFound } from "next/navigation";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (parseInt(id) > 100) {
    notFound();
  }
  return <h1>Blog Detail {id}</h1>;
}
