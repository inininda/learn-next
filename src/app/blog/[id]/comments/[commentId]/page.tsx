export default async function Comments({
  params,
}: {
  params: Promise<{ id: string; commentId: string }>;
}) {
  const { id, commentId } = await params;

  return (
    <h1>
      Blog {id} Comment {commentId}
    </h1>
  );
}
