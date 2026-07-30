import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <br />
      <Link href="/f1/f2">Link to F2</Link>
      <br />
      <Link href="/f3">Link to F3</Link>
    </>
  );
}
