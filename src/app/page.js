import { Card, Button, Progress } from "antd";
import PegBoard from "./components/pegBoard/pegBoard";
import Layout from "./components/layout";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/goals?userId=-1");
  const goals = (await res.json()).rows;
  console.log(goals);
  return (
    <Layout>
      {goals.map((goal) => {
        const { name, todayprogress, totalprogress, frqeuncytype, completed } =
          goal;
        return (
          <Card title={name}>
            <div className="flex flex-col gap-4">
              <PegBoard
                num={completed}
                type={frqeuncytype === 1 ? "Dots" : "Pills"}
              />
              <div>
                <p>
                  {frqeuncytype === 1
                    ? "Today's progress: "
                    : "This week's progress:"}
                </p>
                <Progress
                  type="line"
                  percent={(100 * todayprogress) / totalprogress}
                  steps={totalprogress}
                  showInfo={false}
                ></Progress>
              </div>

              <Button type="primary">Log</Button>
            </div>
          </Card>
        );
      })}
    </Layout>
  );
}
