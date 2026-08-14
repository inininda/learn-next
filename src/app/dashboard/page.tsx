"use client"
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
console.log("hello")
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}!</p>
    </div>
  );
}
