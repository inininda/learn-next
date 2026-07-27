export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for featur {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug) {
    return <h1>Docs home page {slug}</h1>;
  }
  return <h1>Docs home page</h1>;
}
