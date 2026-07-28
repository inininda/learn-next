"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void; // reset the client side component
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      {" "}
      <p> Error in Products {error.message}</p>
      <br />
      <button onClick={reload}>Try Again</button>
    </div>
  );
}
