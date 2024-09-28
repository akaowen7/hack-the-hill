import { Card, Button, Progress } from "antd";
import PegBoard from "./components/pegBoard/pegBoard";

export default function Home() {
  const goals = [
    {
      name: "Goal 1",
      todayProgress: 3,
      totalProgress: 5,
      frqeuncyInterval: 1,
      completed: 1532349930,
    },
    {
      name: "Goal 2",
      todayProgress: 1,
      totalProgress: 4,
      frqeuncyInterval: 2,
      completed: 409,
    },
  ];

  return goals.map((goal) => {
    const { name, todayProgress, totalProgress, frqeuncyInterval, completed } =
      goal;
    return (
      <Card title={name}>
        <div className="flex flex-col gap-4">
          <PegBoard
            num={completed}
            type={frqeuncyInterval === 1 ? "Dots" : "Pills"}
          />
          <div>
            <p>
              {frqeuncyInterval === 1
                ? "Today's progress: "
                : "This week's progress:"}
            </p>
            <Progress
              type="line"
              percent={(100 * todayProgress) / totalProgress}
              steps={totalProgress}
              showInfo={false}
            ></Progress>
          </div>

          <Button type="primary">Log</Button>
        </div>
      </Card>
    );
  });
}
