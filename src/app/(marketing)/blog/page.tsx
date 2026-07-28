export default async function BlogList() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  return <h1>Blog</h1>;
}
