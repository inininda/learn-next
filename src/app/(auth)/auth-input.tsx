"use client";
import { useState } from "react";

export default function AuthInput() {
  const [input, setInput] = useState("");

  return <input value={input} onChange={(e) => setInput(e.target.value)} className="border border-indigo-600"/>;
}
