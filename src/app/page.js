import { Card, Button, Progress } from "antd";

export default function Home() {
  return (
    <Card title="Goal Name">
      <div className="flex flex-col gap-4">
        <p>[calendar/longer term progress]</p>
        <Progress
          type="line"
          percent={50}
          steps={3}
          showInfo={false}
        ></Progress>

        <Button type="primary">Log</Button>
      </div>
    </Card>
  );
}
