import Layout from "./components/layout";
import GoalDisplayCard from "./components/goalDisplayCard";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  // get user id cookie
  const cookieStore = cookies();
  const userIdCookie = cookieStore.get("userId");
  if (!userIdCookie) {
    console.log("User not logged in");
    // redirect to login page
    redirect("/login");
  }

  const res = await fetch(
    `http://localhost:3000/api/goals?userId=${userIdCookie.value}`
  );
  const goals = (await res.json()).rows;
  console.log(goals);

  return (
    <Layout>
      {goals.map((goal) => (
        <GoalDisplayCard goal={goal} />
      ))}
    </Layout>
  );
}
