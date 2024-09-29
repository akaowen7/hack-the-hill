"use client";

import { Card, Button, Progress, Modal } from "antd";
import PegBoard from "./pegBoard/pegBoard";
import { useState } from "react";

export default function GoalDisplayCard({ goal }) {
  const [isLoggingOpen, setIsLoggingOpen] = useState(false);

  // return (
  //   <>
  //     <Button type="primary" onClick={() => setIsLoggingOpen(true)}>
  //       Log
  //     </Button>
  //     <Modal></Modal>
  //   </>
  // );

  const { name, todayProgress, totalProgress, frqeuncyInterval, completed } =
    goal;
  return (
    <Card title={name}>
      <div className="flex flex-col gap-4">
        <p>{isLoggingOpen}</p>
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

        <Button type="primary" onClick={() => setIsLoggingOpen(true)}>
          Log
        </Button>

        <Modal title={name} open={isLoggingOpen}></Modal>
      </div>
    </Card>
  );
}
