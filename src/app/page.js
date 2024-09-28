import { Card, Button, Progress } from "antd";

export default function Home() {
  const goals = [
    {
      name: "Goal 1",
      todayProgress: 3,
      totalProgress: 5,
      completionInterval: 1,
    },
    {
      name: "Goal 2",
      todayProgress: 1,
      totalProgress: 4,
      completionInterval: 2,
    },
  ];

  return goals.map((goal) => {
    const { name, todayProgress, totalProgress, completionInterval } = goal;
    return (
      <Card title={name}>
        <div className="flex flex-col gap-4">
          <p>[calendar/longer term progress]</p>
          <div>
            <p>
              {completionInterval === 1
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
