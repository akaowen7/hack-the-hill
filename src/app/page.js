import Layout from "./components/layout";
import GoalDisplayCard from "./components/goalDisplayCard";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/goals?userId=-1");
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
