export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <h1>Blog Detail {id}</h1>;
}
