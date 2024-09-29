"use client";

import { Card, Button, Progress, Modal, InputNumber } from "antd";
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

  const {
    name,
    todayProgress,
    totalProgress,
    frqeuncyInterval,
    completed,
    defaultIncrement,
  } = goal;
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

        <Modal
          title={name}
          open={isLoggingOpen}
          onCancel={() => setIsLoggingOpen(false)}
        >
          <p>Increment by </p>
          <InputNumber
            min={0}
            max={defaultIncrement * 10}
            defaultValue={defaultIncrement}
          />
        </Modal>
      </div>
    </Card>
  );
}
