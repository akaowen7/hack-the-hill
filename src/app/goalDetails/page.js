"use client";

import Layout from "../components/layout";
import { useSearchParams } from "next/navigation";

export default async function GoalDetails() {
  // Get the goalID from the URL
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const res = await fetch("http://localhost:3000/api/goal?id=" + id);

  console.log(res);

  return (
    <Layout>
      <p>goal details {id}</p>
      <button>Log to console</button>
    </Layout>
  );
}
