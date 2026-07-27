import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  // you can fetch api here also
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Iphone " + id);
    }, 1000);
  });

  return {
    title: `Blog ${title}`,
  };
};

export default async function BlogDetail({ params }: Props) {
  const id = (await params).id;

  if (parseInt(id) > 100) {
    notFound();
  }
  return <h1>Blog Detail {id}</h1>;
}
